import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-up-base-page',
  templateUrl: 'sing-up-base-page.component.html',
  styleUrls: ['sing-up-base-page.component.css'],
})
export class SingUpBasePage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-Up-Base-Page - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-Up-Base-Page - Benchmark App',
      },
    ])
  }
}
