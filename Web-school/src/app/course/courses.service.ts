import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ROUTER_PATH } from '../appConfig/router-path-const';
import { CourseDomain } from '../domain/course-domain';
import { COURSES } from '../mocking/courses-mock';
import { CourseModule } from './course.module';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: CourseDomain[] = COURSES;
  api = environment.API_URL + ROUTER_PATH.coursesPage;
  constructor(private http: HttpClient) {}

  getCourses(): Observable<CourseDomain[]> {
    return this.http.get<CourseDomain[]>(this.api);
  }

  getCourseById(courseId: number): Observable<CourseDomain> {
    return this.http.get<CourseDomain>(
      `${this.api}${ROUTER_PATH.contextPath}${courseId}`
    );
  }

  getCourseOnSerach(searchArg: string): CourseDomain[] {
    const coursesFilterd = this.courses.filter((course) =>
      course.title.toLowerCase().includes(searchArg.toLowerCase())
    );
    return coursesFilterd;
  }
  updateCourse(
    courseId: number,
    course: CourseDomain
  ): Observable<CourseDomain> {
    return this.http.put<CourseDomain>(
      `${this.api}${ROUTER_PATH.contextPath}${courseId}`,
      course
    );
  }

  addCourse(course: CourseDomain): Observable<CourseDomain> {
    return this.http.post<CourseDomain>(`${this.api}`, course);
  }
  deleteCourseById(courseId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.api}${ROUTER_PATH.contextPath}${courseId}`
    );
  }
}
