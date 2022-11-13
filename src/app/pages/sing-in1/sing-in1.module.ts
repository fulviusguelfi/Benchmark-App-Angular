import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingIn1Module {}
