import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'sing-up',
    loadChildren: () =>
      import('./pages/sing-up/sing-up.module').then((m) => m.SingUpModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/session/session.module').then((m) => m.SessionModule),
  },
  {
    path: 'sing-in',
    loadChildren: () =>
      import('./pages/sing-in/sing-in.module').then((m) => m.SingInModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
