import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  open_menu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    this.open_menu= !this.open_menu;
  }
}
