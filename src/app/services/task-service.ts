import { Injectable } from '@angular/core';
import { Task } from '../modal/Task-Modal';
import { TASKS } from '../mocks/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
