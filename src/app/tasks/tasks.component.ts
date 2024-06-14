import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddComponent } from "./add/add.component";
import { type TaskDto } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, AddComponent]
})
export class TasksComponent {

  @Input ({required:true}) userId!: string;
  @Input ({required:true}) name!: string;
  activeForm = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.activeForm = true;
  }

  onCloseAddTask() {
    this.activeForm = false;
  }
}
