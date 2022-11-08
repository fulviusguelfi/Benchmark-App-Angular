import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-in1',
  templateUrl: 'sing-in1.component.html',
  styleUrls: ['sing-in1.component.css'],
})
export class SingIn1 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-In1 - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-In1 - Benchmark App',
      },
    ])
  }
}
