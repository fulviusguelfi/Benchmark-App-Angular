import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingUpW } from './sing-up-w.component'

const routes = [
  {
    path: '',
    component: SingUpW,
  },
]

@NgModule({
  declarations: [SingUpW],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingUpW],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingUpWModule {}
