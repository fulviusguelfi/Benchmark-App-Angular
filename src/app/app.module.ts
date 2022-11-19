import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'sing-up-w',
    loadChildren: () =>
      import('./pages/sing-up-w/sing-up-w.module').then((m) => m.SingUpWModule),
  },
  {
    path: 'sessions-w',
    loadChildren: () =>
      import('./pages/sessions-w/sessions-w.module').then(
        (m) => m.SessionsWModule
      ),
  },
  {
    path: 'sing-in-w',
    loadChildren: () =>
      import('./pages/sing-in-w/sing-in-w.module').then((m) => m.SingInWModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
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
