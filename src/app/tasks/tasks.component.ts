import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummyTasks';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = dummyTasks;

  @Input({required: true}) name!: string;

  @Input({required:true}) userId!: string;
  
  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId === this.userId);
  }
}