import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponenetComponent } from './course-componenet/course-componenet.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [CourseComponenetComponent, CoursesComponent, CourseDetailsComponent, AuthorsComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [CourseComponenetComponent, CoursesComponent, CourseDetailsComponent, AuthorsComponent],
})
export class CourseModule {}
