import { Component, Input } from '@angular/core'

@Component({
  selector: 'session-search',
  templateUrl: 'session-search.component.html',
  styleUrls: ['session-search.component.css'],
})
export class SessionSearch {
  @Input()
  textinput_placeholder: string = 'search here...'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
