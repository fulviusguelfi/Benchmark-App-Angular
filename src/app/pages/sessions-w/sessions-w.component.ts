import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sessions-w',
  templateUrl: 'sessions-w.component.html',
  styleUrls: ['sessions-w.component.css'],
})
export class SessionsW {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sessions-W - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sessions-W - Benchmark App',
      },
    ])
  }
}
