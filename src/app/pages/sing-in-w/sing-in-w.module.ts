import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingInW } from './sing-in-w.component'

const routes = [
  {
    path: '',
    component: SingInW,
  },
]

@NgModule({
  declarations: [SingInW],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingInW],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingInWModule {}
