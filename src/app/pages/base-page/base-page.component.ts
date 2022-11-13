import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'base-page',
  templateUrl: 'base-page.component.html',
  styleUrls: ['base-page.component.css'],
})
export class BasePage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Base-Page - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Base-Page - Benchmark App',
      },
    ])
  }
}
