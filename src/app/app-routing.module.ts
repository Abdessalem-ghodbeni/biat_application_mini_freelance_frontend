import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/layouts/home.component';
import { Error404Component } from './home/views/error404/error404.component';
import { SignInComponent } from './home/views/sign-in/sign-in.component';
import { SignUpComponent } from './home/views/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './home/views/forgot-password/forgot-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthAdminGuard } from './core/guards/admin/auth-admin.guard';
import { AuthEtudiantGuard } from './core/guards/etudiant/auth-etudiant.guard';
import { ResetPasswordComponent } from './home/views/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'resetpassword/:passwordResetToken',component:ResetPasswordComponent },
  { path: 'admin', loadChildren:()=>import('./modules/admin/admin.module').then(x => x.AdminModule) },
  {path:'client',loadChildren:()=>import('./modules/client/client.module').then(c=>c.ClientModule)},
  {path:'agent',loadChildren:()=>import('./modules/agent/agent.module').then(c=>c.AgentModule)},

  { path: '**', component:Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
