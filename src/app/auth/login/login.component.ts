import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getApiData(){
    this.dataService.getHttpClientData();
  }
  login(loginForm : NgForm){
    console.log("Username : " + loginForm.value.username + 
          "\nPassword : " + loginForm.value.password);
    this.authService.login(loginForm.value.username,
            loginForm.value.password);
  }
  constructor(private authService : AuthService, 
          private dataService : DataService) { }

  ngOnInit() {
  }

}
