import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Input({ required: true }) userId = '';
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
