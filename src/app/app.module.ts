import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'base-page',
    loadChildren: () =>
      import('./pages/base-page/base-page.module').then(
        (m) => m.BasePageModule
      ),
  },
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
    path: 'sessions-minimal-ligth',
    loadChildren: () =>
      import(
        './pages/sessions-minimal-ligth/sessions-minimal-ligth.module'
      ).then((m) => m.SessionsMinimalLigthModule),
  },
  {
    path: 'sing-up-w',
    loadChildren: () =>
      import('./pages/sing-up-w/sing-up-w.module').then((m) => m.SingUpWModule),
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
    path: 'sing-up-minimal-ligth',
    loadChildren: () =>
      import('./pages/sing-up-minimal-ligth/sing-up-minimal-ligth.module').then(
        (m) => m.SingUpMinimalLigthModule
      ),
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
    path: 'base-minimal-ligth',
    loadChildren: () =>
      import('./pages/base-minimal-ligth/base-minimal-ligth.module').then(
        (m) => m.BaseMinimalLigthModule
      ),
  },
  {
    path: 'sing-in-minimal-ligth',
    loadChildren: () =>
      import('./pages/sing-in-minimal-ligth/sing-in-minimal-ligth.module').then(
        (m) => m.SingInMinimalLigthModule
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
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
