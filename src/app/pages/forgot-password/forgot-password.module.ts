import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ForgotPassword } from './forgot-password.component'

const routes = [
  {
    path: '',
    component: ForgotPassword,
  },
]

@NgModule({
  declarations: [ForgotPassword],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ForgotPassword],
})
export class ForgotPasswordModule {}
