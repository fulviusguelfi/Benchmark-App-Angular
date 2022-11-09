import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingInWidget1 } from './sing-in-widget1.component'

const routes = [
  {
    path: '',
    component: SingInWidget1,
  },
]

@NgModule({
  declarations: [SingInWidget1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingInWidget1],
})
export class SingInWidget1Module {}
