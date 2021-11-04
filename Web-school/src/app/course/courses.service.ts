import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseDomain } from '../domain/course-domain';
import { COURSES } from '../mocking/courses-mock';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: CourseDomain[] = COURSES;
  constructor() {}

  getCourses(): Observable<CourseDomain[]> {
    return of(this.courses);
  }

  getCourseById(courseId: number): CourseDomain {
    return this.courses.find((course) => {
      if (course.id === courseId) {
        return course;
      }
    });
  }

  getCourseOnSerach(searchArg: string): CourseDomain[] {
    const coursesFilterd = this.courses.filter((course) =>
      course.title.toLowerCase().includes(searchArg.toLowerCase())
    );
    return coursesFilterd;
  }

  deleteCourseById(courseId: number): CourseDomain[] {
    this.courses = this.courses.filter((course) => {
      if (course.id !== courseId) {
        return course;
      }
    });
    return this.courses;
  }
}
