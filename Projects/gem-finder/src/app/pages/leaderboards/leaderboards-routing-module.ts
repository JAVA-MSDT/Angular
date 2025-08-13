import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Leaderboards } from './leaderboards';

const routes: Routes = [{path: '', component: Leaderboards}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardsRoutingModule { }
