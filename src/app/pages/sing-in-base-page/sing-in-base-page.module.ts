import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingInBasePage } from './sing-in-base-page.component'

const routes = [
  {
    path: '',
    component: SingInBasePage,
  },
]

@NgModule({
  declarations: [SingInBasePage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingInBasePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingInBasePageModule {}
