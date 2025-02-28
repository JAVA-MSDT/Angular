import { Pipe, PipeTransform } from '@angular/core';
import { CourseDomain } from '../domain/course-domain';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  dateOne: Date;
  dateTwo: Date;
  transform(value: CourseDomain[], orderByOption: string): unknown {

    if(!value) {
      return value;
    }

    if(orderByOption === 'asc') {
       value.sort((firstCourse, secondcourse) => {
        this.dateOne = new Date(firstCourse.creatingDate);
        this.dateTwo = new Date(secondcourse.creatingDate);

        return this.dateOne.getTime() - this.dateTwo.getTime();
      })
    } else if (orderByOption === 'desc') {
      value.sort((firstCourse, secondcourse) => {
        this.dateOne = new Date(firstCourse.creatingDate);
        this.dateTwo = new Date(secondcourse.creatingDate);

        return this.dateTwo.getTime() - this.dateOne.getTime();
      })
    }

    return value;
  }

}
