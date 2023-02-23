import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public title = {
    type: 'primary',
    text: 'Lista de usuario' 
  };

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
