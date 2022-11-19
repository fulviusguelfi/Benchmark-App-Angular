import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-in-minimal-ligth',
  templateUrl: 'sing-in-minimal-ligth.component.html',
  styleUrls: ['sing-in-minimal-ligth.component.css'],
})
export class SingInMinimalLigth {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-In-Minimal-Ligth - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-In-Minimal-Ligth - Benchmark App',
      },
    ])
  }
}
