import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-in',
  templateUrl: 'sing-in.component.html',
  styleUrls: ['sing-in.component.css'],
})
export class SingIn {
  @Input()
  rootClassName: string = ''
  @Input()
  textinput_password: string = 'password'
  @Input()
  button_singin: string = 'SIng In'
  @Input()
  label_password: string = 'Password'
  @Input()
  heading: string = 'Sing In'
  @Input()
  text: string = 'if you are new here:'
  @Input()
  button_cancel: string = 'Cancel'
  @Input()
  label_email: string = 'e-mail'
  @Input()
  text_link: string = 'create a new account!'
  @Input()
  textinput_email: string = 'e-mail'
  @Input()
  link_text: string = 'https://example.com'

  constructor() {}
}
