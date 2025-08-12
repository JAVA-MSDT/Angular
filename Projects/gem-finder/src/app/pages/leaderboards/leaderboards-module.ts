import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardsRoutingModule } from './leaderboards-routing-module';
import { Leaderboards } from './leaderboards';


@NgModule({
  declarations: [
    Leaderboards
  ],
  imports: [
    CommonModule,
    LeaderboardsRoutingModule
  ]
})
export class LeaderboardsModule { }
