import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../interfaces/player';

@Pipe({
  name: 'sortByGymCount',
  standalone: true
})
export class SortByGymCountPipe implements PipeTransform {

  transform(player: Player[]): Player[] {
    return player.sort((a, b) => b.gems.length - a.gems.length);
  }

}
