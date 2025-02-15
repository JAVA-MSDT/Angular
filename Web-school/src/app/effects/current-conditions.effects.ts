import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CourseActionTypes } from '../actions/course.actions';
import {
  CurrentConditionsLoadded,
  CurrentConditionsLoadFailed,
} from '../actions/current-condition.actions';
import { CoursesService } from '../course/courses.service';

@Injectable()
export class CurrentConditionsEffects {
  constructor(
    private actions$: Actions,
    private courseServices: CoursesService
  ) {}

  loadCurrentCondition$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActionTypes.AddCourse),
      mergeMap((action) =>
        this.courseServices.loadCurrentCondition(action['courses']).pipe(
          map((data) => new CurrentConditionsLoadded(action['courses'], data)),
          catchError((err) =>
            of(new CurrentConditionsLoadFailed(action['courses'], err))
          )
        )
      )
    )
  );
}
