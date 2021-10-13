import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticModule } from './modules/static/static.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), StaticModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
