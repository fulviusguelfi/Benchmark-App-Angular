import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Authentication } from './authentication.component'

const routes = [
  {
    path: '',
    component: Authentication,
  },
]

@NgModule({
  declarations: [Authentication],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Authentication],
})
export class AuthenticationModule {}
