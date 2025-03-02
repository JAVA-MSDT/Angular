import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { Task } from '../../modal/Task-Modal';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskServices: TaskService) {}

  ngOnInit() {
    this.taskServices.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }
}
