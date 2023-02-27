import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public title = {
    type: 'primary',
    text: 'Lista de usuario' 
  };

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
