import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { BaseMinimalLigth } from './base-minimal-ligth.component'

const routes = [
  {
    path: '',
    component: BaseMinimalLigth,
  },
]

@NgModule({
  declarations: [BaseMinimalLigth],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BaseMinimalLigth],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BaseMinimalLigthModule {}
