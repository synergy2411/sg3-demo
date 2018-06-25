import { Component } from '@angular/core';

@Component({
    selector : 'app-user',
   // template : `<h1>User Component Loaded!!</h1>`
   templateUrl : './user.component.html'
})
export class UserComponent{
    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Jan 12, 1964"),
        income  : 50000,
        isWorking : true,
        company : "Microsoft",
        image : 'assets/images/bill.jpg'
    }
}