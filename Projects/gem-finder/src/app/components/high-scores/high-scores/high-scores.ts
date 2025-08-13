import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api-service';
import { Observable, of } from 'rxjs';
import { Player } from '../../../interfaces/player';
import { CommonModule } from '@angular/common';
import { OnlineStatus } from '../../../directives/online-status';
import { RouterLinkWithHref } from '@angular/router';
import { SortByScorePipe } from '../../../pipes/sort-by-score/sort-by-score-pipe';

@Component({
  selector: 'app-high-scores',
  imports: [CommonModule, OnlineStatus, RouterLinkWithHref, SortByScorePipe],
  templateUrl: './high-scores.html',
  styleUrl: './high-scores.scss',
  standalone: true
})
export class HighScores implements OnInit{
public players$: Observable<Player[] | undefined> = of(undefined);

constructor(private api: ApiService){}

  ngOnInit(): void {
    this.players$ = this.api.getAllPlayers();
  }

}
