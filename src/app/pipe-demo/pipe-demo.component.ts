import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  dangerUrl : "javascript:alert('Hello')";
  htmlSnippets = "Template <script>alert('Hello')</script>";

  data: any;
  futureData = new Promise((resolve, reject) => {
    setTimeout(() => {
      this.data = "Some Data !";
      resolve("Here comes the data...")
    }, 2000)
  })

  filteredStatus = "";

  todos = [{
    label: "Some Work",
    status: 'done'
  }, {
    label: "Some Work",
    status: 'pending'
  }, {
    label: "Some Work",
    status: 'done'
  }, {
    label: "Some Work",
    status: 'pending'
  }]

  addTodo() {
    this.todos.push({
      'label': "New Work",
      'status': "pending"
    })
  }

  contact_no = 987654321;

  constructor(private sanitaize : DomSanitizer) { 
   // this.sanitaize.
  //  for(let i = 0; i<10; i ++){
  //   console.log(i);
  //  }
   
  }

  ngOnInit() {
  }

}
