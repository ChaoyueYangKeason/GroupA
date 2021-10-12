import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogEditComponent } from './components/blog-components/blog-edit/blog-edit.component';
import { BlogComponent } from './components/blog-components/blog/blog.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path: 'blogs/:id', component: BlogComponent},

  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/:id', component: BlogEditComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
