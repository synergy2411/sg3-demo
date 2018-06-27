import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {
  num: number;
  data: string;
  myObservable: any;
  constructor() {

    Observable.interval(2000)
      .subscribe(
        (num) => this.num = num,
        (err) => console.log(err),
        () => console.log('COMPLETED!'));

    this.myObservable = Observable.create((observer) => {
      setTimeout(() => {
        observer.next("First Package!")
      }, 1000);
      setTimeout(() => {
        observer.next("Second Package!")
      }, 2000);
      setTimeout(() => {
        observer.next("Third Package!")
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    }).subscribe(
      data => this.data = data,
      err => console.log(err),
      () => console.log('COMPLETED!'))
  }

  unsubscribe() {
    this.myObservable.unsubscribe();
  }


  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("Destroy!");
    this.myObservable.unsubscribe();
  }
}
