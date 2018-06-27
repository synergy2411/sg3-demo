import { Component } from '@angular/core';
// import { USER_DATA } from './data/user-data';
import { User } from './model/user';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];

  increase(){
    this.dataService.counter++;
  }
  changeChild(eventdata : any){
    this.title = eventdata;
  }

  constructor(public dataService : DataService, public authService : AuthService){ }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB3CeOW3Srv85UnCF7oTdiPJu9lGNNuvek",
      authDomain: "sg4-demo.firebaseapp.com"
    });

    this.users = this.dataService.getUserData()
  }
}
