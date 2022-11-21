import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SingInForm } from './sing-in-form/sing-in-form.component'
import { Chat } from './chat/chat.component'
import { SessionList } from './session-list/session-list.component'
import { SingUpForm } from './sing-up-form/sing-up-form.component'
import { SessionSearch } from './session-search/session-search.component'
import { ChatControl } from './chat-control/chat-control.component'

@NgModule({
  declarations: [
    SingInForm,
    Chat,
    SessionList,
    SingUpForm,
    SessionSearch,
    ChatControl,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SingInForm,
    Chat,
    SessionList,
    SingUpForm,
    SessionSearch,
    ChatControl,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
