import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { BasePage } from './base-page.component'

const routes = [
  {
    path: '',
    component: BasePage,
  },
]

@NgModule({
  declarations: [BasePage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasePageModule {}
