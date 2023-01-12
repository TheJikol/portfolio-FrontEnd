import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuardGuard } from './services/guard.guard';


const routes: Routes = [
  {path: '',redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
