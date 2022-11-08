import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-up',
  templateUrl: 'sing-up.component.html',
  styleUrls: ['sing-up.component.css'],
})
export class SingUp {
  @Input()
  heading: string = 'Sing Up'
  @Input()
  button_cancel: string = 'Cancel'
  @Input()
  label_password: string = 'Password'
  @Input()
  textinput_password_confirmation: string = 'password again'
  @Input()
  button_singup: string = 'SIng Up'
  @Input()
  rootClassName: string = ''
  @Input()
  textinput_email: string = 'e-mail'
  @Input()
  label_password_confirm: string = 'Password confirmation'
  @Input()
  label_email: string = 'e-mail'
  @Input()
  textinput_password: string = 'password'

  constructor() {}
}
