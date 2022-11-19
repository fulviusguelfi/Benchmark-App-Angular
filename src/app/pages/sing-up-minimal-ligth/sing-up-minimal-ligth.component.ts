import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-up-minimal-ligth',
  templateUrl: 'sing-up-minimal-ligth.component.html',
  styleUrls: ['sing-up-minimal-ligth.component.css'],
})
export class SingUpMinimalLigth {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-Up-Minimal-Ligth - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-Up-Minimal-Ligth - Benchmark App',
      },
    ])
  }
}
