import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponenetComponent } from './course-componenet/course-componenet.component';
import {
  CoursesRoutingModule,
  routingComponents,
} from './courses-routing.module';

@NgModule({
  declarations: [CourseComponenetComponent, routingComponents],
  imports: [CommonModule, CoursesRoutingModule],
  exports: [CourseComponenetComponent],
})
export class CourseModule {}
