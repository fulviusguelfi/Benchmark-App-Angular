import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SessionsW } from './sessions-w.component'

const routes = [
  {
    path: '',
    component: SessionsW,
  },
]

@NgModule({
  declarations: [SessionsW],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SessionsW],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SessionsWModule {}
