import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummyTasks';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  clicked!:boolean;

  isAddingTask = false;



  constructor(private tasksService: TasksService){
   
  }
  
  @Input({required: true}) name!: string;

  @Input({required:true}) userId!: string;
  
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onClosedAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData:NewTaskData){
    
    this.isAddingTask = false;
  }
}