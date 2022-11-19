import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Chat } from './chat/chat.component'
import { SessionList } from './session-list/session-list.component'

@NgModule({
  declarations: [Chat, SessionList],
  imports: [CommonModule, RouterModule],
  exports: [Chat, SessionList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
