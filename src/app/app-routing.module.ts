import { AuthGuard } from './_helpers/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [ 
// { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
//{ path: 'home', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
