import { Action } from '@ngrx/store';
import { CourseDomain } from '../domain/course-domain';

export enum CourseActionTypes {
  AddCourse = '[Course] Add Course',
  RemoveCourse = '[Course] Remove Course',
}

export class AddCourse implements Action {
  readonly type = CourseActionTypes.AddCourse;

  constructor(public course: CourseDomain) {}
}

export class RemoveCourse implements Action {
  readonly type = CourseActionTypes.RemoveCourse;

  constructor(public course: CourseDomain) {}
}

export type CourseActions = AddCourse | RemoveCourse;
