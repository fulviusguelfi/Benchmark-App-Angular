import { Component, Input } from '@angular/core'

@Component({
  selector: 'profile-widget',
  templateUrl: 'profile-widget.component.html',
  styleUrls: ['profile-widget.component.css'],
})
export class ProfileWidget {
  @Input()
  rootClassName: string = ''

  constructor() {}
}
