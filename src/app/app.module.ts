import { NgModule } from '@angular/core'
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
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sing-in',
    loadChildren: () =>
      import('./pages/sing-in1/sing-in1.module').then((m) => m.SingIn1Module),
  },
  
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
