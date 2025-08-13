import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../interfaces/player';

@Pipe({
  name: 'sortByScore',
  standalone: true
})
export class SortByScorePipe implements PipeTransform {

  transform(player: Player[]): Player[] {
    return player.sort((a, b) => b.score - a.score);
  }

}
