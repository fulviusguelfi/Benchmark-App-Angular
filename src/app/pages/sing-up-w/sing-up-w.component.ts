import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-up-w',
  templateUrl: 'sing-up-w.component.html',
  styleUrls: ['sing-up-w.component.css'],
})
export class SingUpW {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-Up-W - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-Up-W - Benchmark App',
      },
    ])
  }
}
