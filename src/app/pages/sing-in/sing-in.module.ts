import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingIn } from './sing-in.component'

const routes = [
  {
    path: '',
    component: SingIn,
  },
]

@NgModule({
  declarations: [SingIn],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingIn],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingInModule {}
