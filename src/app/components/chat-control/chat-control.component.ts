import { Component, Input } from '@angular/core'

@Component({
  selector: 'chat-control',
  templateUrl: 'chat-control.component.html',
  styleUrls: ['chat-control.component.css'],
})
export class ChatControl {
  @Input()
  button: string = 'Button'
  @Input()
  rootClassName: string = ''
  @Input()
  button1: string = 'Button'
  @Input()
  textinput_placeholder: string = 'search here...'

  constructor() {}
}
