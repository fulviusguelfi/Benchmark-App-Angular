import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SessionsMinimalLigth } from './sessions-minimal-ligth.component'

const routes = [
  {
    path: '',
    component: SessionsMinimalLigth,
  },
]

@NgModule({
  declarations: [SessionsMinimalLigth],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SessionsMinimalLigth],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SessionsMinimalLigthModule {}
