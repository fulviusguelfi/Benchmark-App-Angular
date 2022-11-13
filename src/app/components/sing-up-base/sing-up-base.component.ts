import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-up-base',
  templateUrl: 'sing-up-base.component.html',
  styleUrls: ['sing-up-base.component.css'],
})
export class SingUpBase {
  @Input()
  textinput_email: string = 'e-mail'
  @Input()
  text: string = 'Already have an account:'
  @Input()
  rootClassName: string = ''
  @Input()
  button_cancel: string = 'Cancel'
  @Input()
  textinput_password: string = 'password'
  @Input()
  text_link: string = 'go to sing in page'
  @Input()
  label_password: string = 'Password'
  @Input()
  textinput_password_confirmation: string = 'password again'
  @Input()
  label_password_confirm: string = 'Password confirmation'
  @Input()
  heading: string = 'Sing Up'
  @Input()
  label_email: string = 'e-mail'
  @Input()
  button_singup: string = 'SIng Up'

  constructor() {}
}
