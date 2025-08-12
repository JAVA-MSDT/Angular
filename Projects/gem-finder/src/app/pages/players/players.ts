import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Observable, of } from 'rxjs';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-players',
  standalone: false,
  templateUrl: './players.html',
  styleUrl: './players.scss'
})
export class Players implements OnInit {

  public players$: Observable<Player[] | undefined> = of(undefined);

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.players$ = this.api.getAllPlayers();
  }

  public update(name: string): void {
    this.players$ = this.api.getPlayersByName(name);
  }

}
