import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCommonUiLibModule, NgxCommonUiLibService } from 'ngx-common-ui-lib';

@NgModule({
  declarations: [
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCommonUiLibModule
  ],
  providers: [AuthService, NgxCommonUiLibService]
})
export class RegisterPageModule { }
