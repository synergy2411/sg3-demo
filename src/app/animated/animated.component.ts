import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.css'],
  animations : [
    trigger('divState', [
      state('active', style({
        backgroundColor : 'red',
        transform : 'scaleX(50)'
      })),
      state('inactive', style({
        backgroundColor : 'green'
      })),
      transition ('active <=> inactive', animate(500))
    ])
  ]
})
export class AnimatedComponent implements OnInit {
  state : string = 'active';
  constructor() { }
  toggle(){
    this.state = this.state ==='active' ? 'inactive' : 'active';
  }
  ngOnInit() {
  }

}
