import { Injectable } from '@angular/core';
import { CourseDomain } from '../domain/course-domain';
import { COURSES } from '../mocking/courses-mock';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: CourseDomain[] = COURSES;
  constructor() {}

  getCourses(): CourseDomain[] {
    return this.courses;
  }

  getCourseById(courseId: number): CourseDomain {
    return this.getCourses().find((course) => {
      if (course.id === courseId) {
        return course;
      }
    });
  }

  getCourseOnSerach(searchArg: string): CourseDomain[] {
    const coursesFilterd = this.getCourses().filter((course) =>
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
