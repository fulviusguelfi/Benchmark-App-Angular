import { Component, Input } from '@angular/core'

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.css'],
})
export class SessionList {
  @Input()
  rootClassName: string = ''
  @Input()
  heading: string = '>> MC - GIlberto Chaves'
  @Input()
  text: string = 'Local Session - 25/10/2022'
  @Input()
  text1: string = 'Session ID: # 1'
  @Input()
  heading1: string = 'BM'
  @Input()
  heading11: string = 'MC'
  @Input()
  heading2: string = '>> BM - Gerson Sena'
  @Input()
  text2: string = 'Local Session - 25/10/2022'
  @Input()
  text11: string = 'Session ID: # 1'
  @Input()
  heading111: string = 'MP'
  @Input()
  heading21: string = '>> MC - GIlberto Chaves'
  @Input()
  text21: string = 'Local Session - 25/10/2022'
  @Input()
  text111: string = 'Session ID: # 1'

  constructor() {}
}
