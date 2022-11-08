import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-authentication',
  templateUrl: 'authentication.component.html',
  styleUrls: ['authentication.component.css'],
})
export class Authentication {
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
