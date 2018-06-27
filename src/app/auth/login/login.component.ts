import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  goto(){
    this.router.navigate(['/pipe']);
  }
  getApiData(){
    this.dataService.getHttpClientData()
    .subscribe(data => console.log(data));
  }
  login(loginForm : NgForm){
    console.log("Username : " + loginForm.value.username + 
          "\nPassword : " + loginForm.value.password);
          this.authService.login(loginForm.value.username,
                  loginForm.value.password)
    // this.authService.login(loginForm.value.username,
    //         loginForm.value.password).then((response)=>{
    //           this.router.navigate(['/pipe']);
    //         });
  }
  constructor(private authService : AuthService, 
          private dataService : DataService,
          private router : Router) { }

  ngOnInit() {
  }

}
