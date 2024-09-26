import { Component, computed, EventEmitter, Input, input, output, Output, ɵɵInputTransformsFeature } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string
// };

interface User {
  id: string;
  avatar: string;
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input({required: true}) user!: User;

  //select = output<string>();

  @Output() selec = new EventEmitter();

  //select = output();
  // avatar = input.required<string>();
  // name = input.required<string | number>();

  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser(){
    this.selec.emit(this.user.id);
  }
}