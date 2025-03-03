import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {
  /* Under Construction */
  transform(value: string, filter: string): string {
    if (filter.length === 0) {
      return value;
    }
    const searchReg = new RegExp(filter, 'ig');
    return value.replace(searchReg, (match) => {
      return `<span class="highlight-search">${match}</span>`;
    });
  }
}
