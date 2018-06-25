import { Component } from '@angular/core';
import { USER_DATA } from './data/user-data';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];

  changeChild(eventdata : any){
    this.title = eventdata;
  }

  constructor(){

  }
  ngOnInit(){
    this.users = USER_DATA;
  }
}
