import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { courseReducer, CourseState } from './courses.reducer';

export interface State {
  courses: CourseState;
}

export const reducers: ActionReducerMap<State> = {
  courses: courseReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
