import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-in-widget1',
  templateUrl: 'sing-in-widget1.component.html',
  styleUrls: ['sing-in-widget1.component.css'],
})
export class SingInWidget1 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-In-Widget1 - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-In-Widget1 - Benchmark App',
      },
    ])
  }
}
