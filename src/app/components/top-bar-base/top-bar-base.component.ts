import { Component, Input } from '@angular/core'

@Component({
  selector: 'top-bar-base',
  templateUrl: 'top-bar-base.component.html',
  styleUrls: ['top-bar-base.component.css'],
})
export class TopBarBase {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Sing Up'
  @Input()
  text1: string = 'Sing In'

  constructor() {}
}