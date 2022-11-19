import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingInMinimalLigth } from './sing-in-minimal-ligth.component'

const routes = [
  {
    path: '',
    component: SingInMinimalLigth,
  },
]

@NgModule({
  declarations: [SingInMinimalLigth],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingInMinimalLigth],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingInMinimalLigthModule {}
