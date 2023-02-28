import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'app/services/scripts/scripts.service';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  constructor( 
    private _script: ScriptsService
   ) {
    _script.loadFiles(["script"]);
  }
  ngOnInit() {
  }

}
