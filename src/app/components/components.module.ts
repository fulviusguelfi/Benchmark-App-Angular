import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Chat } from './chat/chat.component'

@NgModule({
  declarations: [Chat],
  imports: [CommonModule, RouterModule],
  exports: [Chat],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
