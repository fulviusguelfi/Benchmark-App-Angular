import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-session',
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.css'],
})
export class Session {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Benchmark App',
      },
    ])
  }
}
