import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'create-account',
  templateUrl: 'create-account.component.html',
  styleUrls: ['create-account.component.css'],
})
export class CreateAccount {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Create-Account - Benchmark App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Create-Account - Benchmark App',
      },
    ])
  }
}
