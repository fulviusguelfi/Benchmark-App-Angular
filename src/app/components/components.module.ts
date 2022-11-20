import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Chat } from './chat/chat.component'
import { SessionList } from './session-list/session-list.component'
import { SingInForm } from './sing-in-form/sing-in-form.component'
import { SingUpForm } from './sing-up-form/sing-up-form.component'

@NgModule({
  declarations: [Chat, SessionList, SingInForm, SingUpForm],
  imports: [CommonModule, RouterModule],
  exports: [Chat, SessionList, SingInForm, SingUpForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
