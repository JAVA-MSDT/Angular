import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist',
})
export class SearchArtistPipe implements PipeTransform {
  transform(pipeDate: any[], pipeModifier: any): any {
    return pipeDate.filter((eachItem: any) => {
      return (
        eachItem['name'].toLowerCase().include(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().include(pipeModifier.toLowerCase())
      );
    });
  }
}
