import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
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
    path: 'create-account',
    loadChildren: () =>
      import('./pages/create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
