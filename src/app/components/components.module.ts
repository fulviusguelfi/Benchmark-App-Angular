import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SingIn } from './sing-in/sing-in.component'
import { SingInWidget } from './sing-in-widget/sing-in-widget.component'
import { TopBar } from './top-bar/top-bar.component'
import { SingUp } from './sing-up/sing-up.component'
import { Forgot } from './forgot/forgot.component'

@NgModule({
  declarations: [SingIn, SingInWidget, TopBar, SingUp, Forgot],
  imports: [CommonModule, RouterModule],
  exports: [SingIn, SingInWidget, TopBar, SingUp, Forgot],
})
export class ComponentsModule {}
