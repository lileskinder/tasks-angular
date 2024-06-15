import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { TaskComponent } from "./task/task.component";
import { AddComponent } from "./add/add.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";


@NgModule ({
    declarations: [TaskComponent, AddComponent, TasksComponent],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}