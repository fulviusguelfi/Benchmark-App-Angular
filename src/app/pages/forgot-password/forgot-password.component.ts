import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password.component.css'],
})
export class ForgotPassword {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Forgot-Password - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Forgot-Password - Benchmark App',
      },
    ])
  }
}
