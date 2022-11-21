import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sing-up',
  templateUrl: 'sing-up.component.html',
  styleUrls: ['sing-up.component.css'],
})
export class SingUp {
  raw3dvc: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sing-Up - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sing-Up - Benchmark App',
      },
    ])
  }
}
