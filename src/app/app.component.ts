import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
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