import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from './guards/auth-login.guard';

import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FullPageComponent } from './pages/full-page/full-page.component';
import { ListaTurnosComponent } from './pages/lista-turnos/lista-turnos.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    component: FullPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthLoginGuard]
  },
  {
      path: 'lista-turnos',
      component: ListaTurnosComponent,
      canActivate: [AuthLoginGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
