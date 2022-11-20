import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingUp } from './sing-up.component'

const routes = [
  {
    path: '',
    component: SingUp,
  },
]

@NgModule({
  declarations: [SingUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingUpModule {}
