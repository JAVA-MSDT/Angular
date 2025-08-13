import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { OnlineStatus } from '../../../directives/online-status';
import { SortByGymCountPipe } from '../../../pipes/sort-by-gym-count/sort-by-gym-count-pipe';
import { Observable, of } from 'rxjs';
import { Player } from '../../../interfaces/player';
import { ApiService } from '../../../services/api-service';

@Component({
  selector: 'app-most-gems',
  imports: [CommonModule, OnlineStatus, RouterLinkWithHref, SortByGymCountPipe],
  templateUrl: './most-gems.html',
  styleUrl: './most-gems.scss',
  standalone: true
})
export class MostGems implements OnInit{
public players$: Observable<Player[] | undefined> = of(undefined);

constructor(private api: ApiService){}

  ngOnInit(): void {
    this.players$ = this.api.getAllPlayers();
  }

}
