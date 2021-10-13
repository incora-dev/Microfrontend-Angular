import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { StaticPageComponent } from './pages/static-page/static-page.component';

const routes: Route[] = [{ path: '', component: StaticPageComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
