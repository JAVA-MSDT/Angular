import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mocks/mock-tasks';
import { Task } from '../../modal/Task-Modal';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;
  constructor() { }

  ngOnInit() {
    
  }

}