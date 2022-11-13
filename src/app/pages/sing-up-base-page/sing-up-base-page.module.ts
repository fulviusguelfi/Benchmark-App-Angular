import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingUpBasePage } from './sing-up-base-page.component'

const routes = [
  {
    path: '',
    component: SingUpBasePage,
  },
]

@NgModule({
  declarations: [SingUpBasePage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingUpBasePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingUpBasePageModule {}
