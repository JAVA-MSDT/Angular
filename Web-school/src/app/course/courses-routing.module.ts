import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  { path: 'courses', canActivate: [AuthGuard], component: CoursesComponent },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    component: CourseDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
export const routingComponents = [CoursesComponent, CourseDetailsComponent];
