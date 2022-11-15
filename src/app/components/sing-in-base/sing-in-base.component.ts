import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-in-base',
  templateUrl: 'sing-in-base.component.html',
  styleUrls: ['sing-in-base.component.css'],
})
export class SingInBase {
  @Input()
  rootClassName: string = ''
  @Input()
  text_link: string = 'create a new account!'
  @Input()
  textinput_password: string = 'password'
  @Input()
  text2: string = 'Cancel'
  @Input()
  textinput_email: string = 'e-mail'
  @Input()
  heading: string = 'Sing In'
  @Input()
  text1: string = 'SIng In'
  @Input()
  text: string = 'if you are new here:'

  constructor() {}
}
