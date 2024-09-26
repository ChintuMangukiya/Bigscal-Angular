import { Component } from '@angular/core';
import { Header } from './Header/header';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  selectedUserId = "";
  users = DUMMY_USERS;

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }


  onSelectUser(id:string){
    this.selectedUserId = id;
  }

  onScrollTop(){
    console.log("ag");
  }

}