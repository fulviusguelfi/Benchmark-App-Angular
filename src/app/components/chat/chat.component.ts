import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
})
export class Chat {
  @Input()
  text41: string = 'SH : 1'
  @Input()
  text1: string = 'Text'
  @Input()
  text31: string = 'Text'
  @Input()
  text4: string = 'OBS'
  @Input()
  text2: string = 'Label'
  @Input()
  text32: string = 'Text'
  @Input()
  text: string = 'Label'
  @Input()
  textinput_placeholder: string = 'placeholder'
  @Input()
  text3: string = 'Text'
  @Input()
  text43: string = 'KW : 1'
  @Input()
  text42: string = 'SH : 1'
  @Input()
  button2: string = 'Key Words'
  @Input()
  button1: string = 'Sub Hability'

  constructor() {}
}
