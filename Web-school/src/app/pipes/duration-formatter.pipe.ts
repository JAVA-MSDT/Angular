import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormatter',
})
export class DurationFormatterPipe implements PipeTransform {
  transform(minutes: any): unknown {
    if (minutes! instanceof Number) {
      return minutes;
    }

    if (minutes < 60) {
      return `00:${minutes}min`;
    }

    if (minutes > 60) {
      const hours = Math.floor(minutes / 60); 
      const min =  minutes % 60;
      return `${hours}h ${min}min`;
    }

   
  }
}
