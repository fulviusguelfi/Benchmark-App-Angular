import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ChatControl } from './chat-control/chat-control.component'
import { SingInForm } from './sing-in-form/sing-in-form.component'
import { Chat } from './chat/chat.component'
import { SessionList } from './session-list/session-list.component'
import { SessionSearch } from './session-search/session-search.component'
import { SingUpForm } from './sing-up-form/sing-up-form.component'

@NgModule({
  declarations: [
    ChatControl,
    SingInForm,
    Chat,
    SessionList,
    SessionSearch,
    SingUpForm,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ChatControl,
    SingInForm,
    Chat,
    SessionList,
    SessionSearch,
    SingUpForm,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
