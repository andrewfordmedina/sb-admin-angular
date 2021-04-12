import { FormTagifyComponent } from './form-tagify/form-tagify.component';
import { resolverDatables } from './../_helpers/resolverDatatables';
import { AuthGuard } from './../_helpers/auth.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsComponent } from './forms/forms.component';
import { ChatComponent } from './chat/chat.component';
import { TestApiComponent } from './test-api/test-api.component';
import { AdminComponent } from './admin.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate, Resolve } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CommonModule } from '@angular/common';
 

 
// const routes: Routes = [
//     {   path: 'user',   component: UserComponent   },
//     {   path: 'rights',   component: RightsComponent   },
//     {   path: 'dashboard',   component: DashboardComponent   },
//   ];

 
const routes: Routes = [
 { path: "home" , component: AdminComponent , 
     children:[
        { path: 'datatable', component: DatatableComponent,canActivate: [AuthGuard] ,resolve:[resolverDatables]},
        { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
        { path: 'test-api', component: TestApiComponent,canActivate: [AuthGuard]},
        { path: 'chat', component: ChatComponent,canActivate: [AuthGuard]},
        { path: 'form-1', component: FormsComponent,canActivate: [AuthGuard]},
        { path: 'form-2', component: TemplateDrivenFormComponent,canActivate: [AuthGuard]},
        { path: 'tagify', component: FormTagifyComponent,canActivate: [AuthGuard]},
        { path: '', component: DashboardComponent,canActivate: [AuthGuard]},
        { path: '**', component: NotFoundComponent }

     ]}
];
//canActivate: [AuthGuard]
 
@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }