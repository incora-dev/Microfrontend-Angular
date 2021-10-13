import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from './modules/table/table.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), TableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
