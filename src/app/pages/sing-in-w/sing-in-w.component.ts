import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-in-w',
  templateUrl: 'sing-in-w.component.html',
  styleUrls: ['sing-in-w.component.css'],
})
export class SingInW {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-In-W - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-In-W - Benchmark App',
      },
    ])
  }
}
