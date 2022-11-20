import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-up-form',
  templateUrl: 'sing-up-form.component.html',
  styleUrls: ['sing-up-form.component.css'],
})
export class SingUpForm {
  @Input()
  textinput_placeholder: string = ''
  @Input()
  textinput_placeholder11: string = ''
  @Input()
  text5: string = 'password'
  @Input()
  text51: string = 'confirm password'
  @Input()
  text6: string = 'Sing Up'
  @Input()
  text4: string = 'e-mail'
  @Input()
  textinput_placeholder1: string = ''
  @Input()
  rootClassName: string = ''

  constructor() {}
}
