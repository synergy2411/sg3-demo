import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  data : any;
  futureData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      this.data ="Some Data !";
      resolve("Here comes the data...")
    }, 2000)
  })

  filteredStatus = "";

  todos = [{
    label : "Some Work",
    status : 'done'
  },{
    label : "Some Work",
    status : 'pending'
  },{
    label : "Some Work",
    status : 'done'
  },{
    label : "Some Work",
    status : 'pending'
  }]

  addTodo(){
    this.todos.push({
      'label' :"New Work",
      'status' : "pending"
    })
  }

  contact_no = 987654321;

  constructor() { }

  ngOnInit() {
  }

}
