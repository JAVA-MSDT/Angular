import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../modal/Task-Modal';
import { TASKS } from '../mocks/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
