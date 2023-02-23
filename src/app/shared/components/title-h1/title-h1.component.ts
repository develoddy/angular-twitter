import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.css']
})
export class TitleH1Component implements OnInit {

  // Se recibe
  /*@Input() data: ItitleH1 = {
    text: '',
    type: 'primary'
  }*/
  @Input() text = '';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
