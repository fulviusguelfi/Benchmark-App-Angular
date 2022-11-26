import { Component, Input } from '@angular/core'

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.css'],
})
export class SessionList {
  @Input()
  heading1: string = 'BM'
  @Input()
  heading: string = '>> MC - GIlberto Chaves'
  @Input()
  text: string = 'Local Session - 25/10/2022'
  @Input()
  text1: string = 'Session ID: # 1'
  @Input()
  text3: string = 'Add Session'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
