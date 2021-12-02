import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService } from '../course/courses.service';
import { CourseDomain } from '../domain/course-domain';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<CourseDomain> {
  constructor(private courseService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CourseDomain> {
    let id = parseInt(route.paramMap.get('id'));
    console.log('resolve');
    console.log(id);

    return this.courseService.getCourseById(id);
  }
}
