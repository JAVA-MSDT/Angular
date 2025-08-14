import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JoinPipe } from '../../pipes/join/join-pipe';
import { OnlineStatus } from '../../directives/online-status';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, map, switchMap } from 'rxjs';
import { Player } from '../../interfaces/player';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  imports: [CommonModule, JoinPipe, OnlineStatus]
})
export class Profile implements OnInit {
  public player$: Observable<Player | undefined> = of(undefined);

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.player$ = this.route.paramMap.pipe(
      map(params => params.get('id') ?? ''),
      switchMap(id => this.api.getPlayerById(id))
    );
  }

}
