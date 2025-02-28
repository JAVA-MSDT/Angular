import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: any, filterText: string): any {

    if (!filterText) {
      return value;
    }

    const regex = new RegExp(filterText, 'gi');
    const match = value?.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class='highlight'>${match[0]}</span>`);
  }

}
