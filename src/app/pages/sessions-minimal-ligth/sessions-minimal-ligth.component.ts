import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sessions-minimal-ligth',
  templateUrl: 'sessions-minimal-ligth.component.html',
  styleUrls: ['sessions-minimal-ligth.component.css'],
})
export class SessionsMinimalLigth {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sessions-Minimal-Ligth - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sessions-Minimal-Ligth - Benchmark App',
      },
    ])
  }
}
