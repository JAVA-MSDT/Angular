import { Action } from '@ngrx/store';
import { CourseDomain } from '../domain/course-domain';

export enum CurrentConditionActionTypes {
  CurrentConditionsLoadded = '[CurrentCondition] CurrentConditions Loadded',
  CurrentConditionsLoadFailed = '[CurrentCondition] CurrentConditions Loadd Failed',
  
  
}

export class CurrentConditionsLoadded implements Action {
  readonly type = CurrentConditionActionTypes.CurrentConditionsLoadded;

  constructor(public course: CourseDomain, public conditions: any) {}
}

export class CurrentConditionsLoadFailed implements Action {
  readonly type = CurrentConditionActionTypes.CurrentConditionsLoadFailed;

  constructor(public course: CourseDomain, public error: any) {}
}


export type CurrentConditionActions = CurrentConditionsLoadded | CurrentConditionsLoadFailed;
