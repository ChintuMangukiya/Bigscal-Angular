import { Component } from '@angular/core';
import { Header } from './Header/header';
import { NgFor, NgIf } from '@angular/common';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  selectedUserId?:string;
  users = DUMMY_USERS;


  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }

  onSelectUser(id:any){
    this.selectedUserId = id;
  }


}