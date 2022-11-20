import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-in',
  templateUrl: 'sing-in.component.html',
  styleUrls: ['sing-in.component.css'],
})
export class SingIn {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-In - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-In - Benchmark App',
      },
    ])
  }
}
