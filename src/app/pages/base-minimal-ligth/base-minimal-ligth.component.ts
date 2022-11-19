import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'base-minimal-ligth',
  templateUrl: 'base-minimal-ligth.component.html',
  styleUrls: ['base-minimal-ligth.component.css'],
})
export class BaseMinimalLigth {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Base-Minimal-Ligth - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Base-Minimal-Ligth - Benchmark App',
      },
    ])
  }
}
