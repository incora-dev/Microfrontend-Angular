import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from './components/charts/charts.module';
import { NgxCommonUiLibModule } from 'ngx-common-ui-lib';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    NgxCommonUiLibModule
  ]
})
export class DashboardModule { }
