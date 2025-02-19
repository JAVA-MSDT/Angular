import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HTTP_CONST } from '../appConfig/http-const';
import { ROUTER_PATH } from '../appConfig/router-path-const';
import { Author } from '../domain/author';
import { CourseDomain } from '../domain/course-domain';
import { COURSES } from '../mocking/courses-mock';
import { HttpService } from '../services/http-service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: CourseDomain[] = COURSES;
  api = environment.API_URL + ROUTER_PATH.coursesPage;
  constructor(private httpService: HttpService) {}

  getCourses(): Observable<CourseDomain[]> {
    return this.httpService.httpRequest(HTTP_CONST.GET, this.api, null, null);
  }

  getCourseById(courseId: number | string): Observable<CourseDomain> {
    return this.httpService.httpRequest(
      HTTP_CONST.GET,
      `${this.api}${ROUTER_PATH.contextPath}${courseId}`,
      null,
      null
    );
  }

  getCourseOnSerach(searchArg: string): Observable<CourseDomain[]> {
    const queryParams = { q: searchArg };
    return this.httpService.httpRequest(
      HTTP_CONST.GET,
      this.api,
      null,
      queryParams,
      null
    );
  }

  updateCourse(
    courseId: number | string,
    course: CourseDomain
  ): Observable<CourseDomain> {
    return this.httpService.httpRequest(
      HTTP_CONST.PUT,
      `${this.api}${ROUTER_PATH.contextPath}${courseId}`,
      course,
      null
    );
  }

  addCourse(course: CourseDomain): Observable<CourseDomain> {
    return this.httpService.httpRequest(
      HTTP_CONST.POST,
      this.api,
      course,
      null
    );
  }

  deleteCourseById(courseId: number | string): Observable<void> {
    return this.httpService.httpRequest(
      HTTP_CONST.DELETE,
      `${this.api}${ROUTER_PATH.contextPath}${courseId}`,
      null,
      null
    );
  }

  loadCurrentCondition(course: CourseDomain): Observable<CourseDomain[]> {
    console.log(course);
    return null;
  }

  getAuthors(): Observable<Author[]> {
    let authors: Author[] = [];
    this.getCourses().subscribe((courses) => {
      courses.forEach((course) => {
        if (course.authors) {
          authors.push(...course.authors);
        }
      });
    });
    return of(authors);
  }
}
