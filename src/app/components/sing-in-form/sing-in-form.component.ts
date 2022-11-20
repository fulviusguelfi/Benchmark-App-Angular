import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-in-form',
  templateUrl: 'sing-in-form.component.html',
  styleUrls: ['sing-in-form.component.css'],
})
export class SingInForm {
  @Input()
  text: string = 'e-mail'
  @Input()
  text1: string = 'e-mail'
  @Input()
  text2: string = 'e-mail'
  @Input()
  text3: string = 'e-mail'
  @Input()
  text4: string = 'e-mail'
  @Input()
  textinput_placeholder: string = ''
  @Input()
  text5: string = 'password'
  @Input()
  textinput_placeholder1: string = ''
  @Input()
  rootClassName: string = ''
  @Input()
  text6: string = 'Sing In'

  constructor() {}
}
