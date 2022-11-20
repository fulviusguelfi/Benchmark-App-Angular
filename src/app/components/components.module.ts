import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SingInForm } from './sing-in-form/sing-in-form.component'
import { Chat } from './chat/chat.component'
import { SessionList } from './session-list/session-list.component'
import { SingUpForm } from './sing-up-form/sing-up-form.component'

@NgModule({
  declarations: [SingInForm, Chat, SessionList, SingUpForm],
  imports: [CommonModule, RouterModule],
  exports: [SingInForm, Chat, SessionList, SingUpForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
