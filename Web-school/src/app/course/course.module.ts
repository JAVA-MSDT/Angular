import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponenetComponent } from './course-componenet/course-componenet.component';
import {
  CoursesRoutingModule,
  routingComponents,
} from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CourseComponenetComponent, routingComponents],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
  exports: [CourseComponenetComponent],
})
export class CourseModule {}
