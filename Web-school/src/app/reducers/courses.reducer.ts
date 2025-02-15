import { CourseActions, CourseActionTypes } from '../actions/course.actions';
import { CoursesService } from '../course/courses.service';
import { CourseDomain } from '../domain/course-domain';
import { HttpService } from '../services/http-service';

export const coursesFeatureKey = 'courses';

export interface CourseState {
  courses: Array<CourseDomain>;
}

export const initialState: CourseState = {
  courses: [],
};

export function courseReducer(
  state = initialState,
  action: CourseActions
): CourseState {
  switch (action.type) {
    case CourseActionTypes.AddCourse:
      return { ...state, courses: [...state.courses, action.course] };
    case CourseActionTypes.RemoveCourse:
      return {
        ...state,
        courses: state.courses.filter((course) => course !== action.course),
      };
    default:
      return state;
  }
}
