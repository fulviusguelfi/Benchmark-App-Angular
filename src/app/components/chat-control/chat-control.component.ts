import { Component, Input } from '@angular/core'

@Component({
  selector: 'chat-control',
  templateUrl: 'chat-control.component.html',
  styleUrls: ['chat-control.component.css'],
})
export class ChatControl {
  @Input()
  rootClassName: string = ''
  @Input()
  textinput_placeholder: string = 'search here...'
  @Input()
  button: string = 'Button'
  @Input()
  button1: string = 'Button'

  constructor() {}
}
