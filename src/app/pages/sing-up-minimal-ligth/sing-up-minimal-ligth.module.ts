import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SingUpMinimalLigth } from './sing-up-minimal-ligth.component'

const routes = [
  {
    path: '',
    component: SingUpMinimalLigth,
  },
]

@NgModule({
  declarations: [SingUpMinimalLigth],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SingUpMinimalLigth],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingUpMinimalLigthModule {}
