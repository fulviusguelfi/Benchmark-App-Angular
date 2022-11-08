import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CreateAccount } from './create-account.component'

const routes = [
  {
    path: '',
    component: CreateAccount,
  },
]

@NgModule({
  declarations: [CreateAccount],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CreateAccount],
})
export class CreateAccountModule {}
