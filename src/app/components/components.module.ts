import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SingIn } from './sing-in/sing-in.component'
import { SingUpBase } from './sing-up-base/sing-up-base.component'
import { SingInWidget } from './sing-in-widget/sing-in-widget.component'
import { TopBarBase } from './top-bar-base/top-bar-base.component'
import { Chat } from './chat/chat.component'
import { TopBar } from './top-bar/top-bar.component'
import { SingInBase } from './sing-in-base/sing-in-base.component'
import { SingUp } from './sing-up/sing-up.component'
import { Forgot } from './forgot/forgot.component'

@NgModule({
  declarations: [
    SingIn,
    SingUpBase,
    SingInWidget,
    TopBarBase,
    Chat,
    TopBar,
    SingInBase,
    SingUp,
    Forgot,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SingIn,
    SingUpBase,
    SingInWidget,
    TopBarBase,
    Chat,
    TopBar,
    SingInBase,
    SingUp,
    Forgot,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
