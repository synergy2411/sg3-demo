import { Component } from '@angular/core';
// import { USER_DATA } from './data/user-data';
import { User } from './model/user';
import { DataService } from './services/data.service';

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

  constructor(public dataService : DataService){ }
  ngOnInit(){
    // this.users = this.dataService.getUserData();
    this.dataService.getHttpData()
      .subscribe(data=>this.users = data);
  }
}
