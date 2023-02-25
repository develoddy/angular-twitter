import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-options',
  templateUrl: './icon-options.component.html',
  styleUrls: ['./icon-options.component.css']
})
export class IconOptionsComponent {
  // text, Icon, active
  @Input() text = '';
  @Input() type = '';
  @Input() active = '';
  @Input() primary = '';
}
