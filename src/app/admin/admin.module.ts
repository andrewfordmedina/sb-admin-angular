import { resolverDatables } from './../_helpers/resolverDatatables';
import { SharedService } from './../_helpers/sharedService';
import { TestApiComponent } from './test-api/test-api.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TopbarComponent } from './../admin/navbar/topbar/topbar.component';
import { SidebarComponent } from './../admin/navbar/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable/datatable.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';
import { UpperCaseDirective } from '../_directives/UpperCaseDirective';
import { ChatComponent } from './chat/chat.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormTagifyComponent } from './form-tagify/form-tagify.component';



@NgModule({
  declarations: [SidebarComponent,TopbarComponent,AdminComponent,DatatableComponent,TestApiComponent,UpperCaseDirective, ChatComponent, FormsComponent, TemplateDrivenFormComponent, FormTagifyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SharedService,
    resolverDatables
    // fakeBackendProvider,
  ],
  exports:[SidebarComponent,TopbarComponent,AdminComponent,DatatableComponent]
  
})
export class AdminModule { }
