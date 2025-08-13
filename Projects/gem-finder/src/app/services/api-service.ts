import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Player } from '../interfaces/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly playerURL: string = 'src/assets/mocks/players.json';
  constructor(private http: HttpClient) {}

  public getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('/assets/mocks/players.json').pipe(delay(1000));
  }

  public getPlayerById(id: string) {
    return this.getAllPlayers().pipe(
      map(players => players.find(player => player.id === id))
    );
  }

  public getPlayersByName(name: string): Observable<Player[]> {
    return this.getAllPlayers().pipe(
      map((players: Player[]) => players.filter(player =>
        player.name.toLowerCase().includes(name.toLowerCase())))
    );
  }
}
