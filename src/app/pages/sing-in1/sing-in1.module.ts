import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingIn1 } from './sing-in1.component'

const routes = [
  {
    path: '',
    component: SingIn1,
  },
]

@NgModule({
  declarations: [SingIn1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingIn1],
})
export class SingIn1Module {}
