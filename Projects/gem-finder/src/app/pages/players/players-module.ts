import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing-module';
import { Players } from './players';
import { OnlineStatus } from '../../directives/online-status';


@NgModule({
  declarations: [Players],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    OnlineStatus
  ],
  exports: [
    Players
  ]
})
export class PlayersModule { }
