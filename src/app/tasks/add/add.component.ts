import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Input({required: true}) userId='';
  @Output() close = new EventEmitter<void>();
  enteredTitle = '' //signal('');
  enteredSummary = '' //signal('');
  enteredDate = '' //signal('');

  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
      }, 
      this.userId
    );
    this.close.emit();
  }
}
