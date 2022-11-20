import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-in-form',
  templateUrl: 'sing-in-form.component.html',
  styleUrls: ['sing-in-form.component.css'],
})
export class SingInForm {
  @Input()
  text6: string = 'Sing In'
  @Input()
  text5: string = 'password'
  @Input()
  textinput_placeholder1: string = ''
  @Input()
  text4: string = 'e-mail'
  @Input()
  rootClassName: string = ''
  @Input()
  textinput_placeholder: string = ''

  constructor() {}
}
