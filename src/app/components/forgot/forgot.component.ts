import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-forgot',
  templateUrl: 'forgot.component.html',
  styleUrls: ['forgot.component.css'],
})
export class Forgot {
  @Input()
  label_email: string = 'e-mail'
  @Input()
  textinput_email: string = 'e-mail'
  @Input()
  heading: string = 'Forgot your password'
  @Input()
  button_forgot: string = 'Send me a reset link'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
