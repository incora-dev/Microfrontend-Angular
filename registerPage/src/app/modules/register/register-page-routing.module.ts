import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Route[] = [{ path: '', component: RegisterPageComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule { }
