import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardsRoutingModule } from './leaderboards-routing-module';
import { Leaderboards } from './leaderboards';
import { HighScores } from "../../components/high-scores/high-scores/high-scores";
import { MostGems } from "../../components/most-gems/most-gems/most-gems";


@NgModule({
  declarations: [
    Leaderboards
  ],
  imports: [
    CommonModule,
    LeaderboardsRoutingModule,
    HighScores,
    MostGems
]
})
export class LeaderboardsModule { }
