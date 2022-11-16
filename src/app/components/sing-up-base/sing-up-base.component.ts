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
  textinput_password_confirmation: string = 'password again'
  @Input()
  heading: string = 'Sing Up'
  @Input()
  text1: string = 'SIng Up'
  @Input()
  text2: string = 'Cancel'

  constructor() {}
}
