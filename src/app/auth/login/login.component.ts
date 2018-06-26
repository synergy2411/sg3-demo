import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(loginForm : NgForm){
    console.log("Username : " + loginForm.value.username + 
          "\nPassword : " + loginForm.value.password);
  }
  constructor() { }

  ngOnInit() {
  }

}
