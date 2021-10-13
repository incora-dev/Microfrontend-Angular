import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { StaticRoutingModule } from './static.routing.module';
import { NgxCommonUiLibModule } from 'ngx-common-ui-lib';



@NgModule({
  declarations: [StaticPageComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    NgxCommonUiLibModule
  ]
})
export class StaticModule { }
