import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-in-base-page',
  templateUrl: 'sing-in-base-page.component.html',
  styleUrls: ['sing-in-base-page.component.css'],
})
export class SingInBasePage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-In-Base-Page - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-In-Base-Page - Benchmark App',
      },
    ])
  }
}
