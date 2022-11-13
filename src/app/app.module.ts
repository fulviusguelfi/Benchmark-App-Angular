import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'create-account',
    loadChildren: () =>
      import('./pages/create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
  {
    path: 'sing-in-base-page',
    loadChildren: () =>
      import('./pages/sing-in-base-page/sing-in-base-page.module').then(
        (m) => m.SingInBasePageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'sing-in-widget1',
    loadChildren: () =>
      import('./pages/sing-in-widget1/sing-in-widget1.module').then(
        (m) => m.SingInWidget1Module
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sing-in1',
    loadChildren: () =>
      import('./pages/sing-in1/sing-in1.module').then((m) => m.SingIn1Module),
  },
  {
    path: 'sing-up-base-page',
    loadChildren: () =>
      import('./pages/sing-up-base-page/sing-up-base-page.module').then(
        (m) => m.SingUpBasePageModule
      ),
  },
  {
    path: 'base-page',
    loadChildren: () =>
      import('./pages/base-page/base-page.module').then(
        (m) => m.BasePageModule
      ),
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
