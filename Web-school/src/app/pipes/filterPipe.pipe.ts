import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterText: string): any {
    const lowerCaseFilterText = filterText?.toLowerCase();
    if (!value || !lowerCaseFilterText) {
      return value;
    }
    return value.filter((item) => {
      return item.title.toLowerCase().includes(lowerCaseFilterText);
    });
  }
}
