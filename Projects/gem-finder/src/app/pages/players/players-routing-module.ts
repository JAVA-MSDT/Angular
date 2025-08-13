import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Players } from './players';

const routes: Routes = [{path: '', component: Players}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
