import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[
    trigger('openMenu', [
      state('in', style({
        tranform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        tranform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  menuState: string = 'out';

  ngOnInit() {
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' :'out'
  }

}
