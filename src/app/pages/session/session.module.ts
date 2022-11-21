import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Session } from './session.component'

const routes = [
  {
    path: '',
    component: Session,
  },
]

@NgModule({
  declarations: [Session],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Session],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SessionModule {}
