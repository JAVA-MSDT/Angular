import { Injectable } from '@angular/core';
import { CourseDomain } from '../domain/course-domain';
import { COURSES } from '../mocking/courses-mock';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses(): CourseDomain[] {
    return COURSES;
  }

  getCourseById(courseId: number): CourseDomain {
    return this.getCourses().find((course) => {
      if (course.id === courseId) {
        return course;
      }
    });
  }

  getCourseOnSerach(searchArg: string): CourseDomain[] {
    const coursesFilterd = COURSES.filter((course) =>
      course.title.toLowerCase().includes(searchArg.toLowerCase())
    );
    return coursesFilterd;
  }
}
