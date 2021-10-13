import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { PaginatedTableComponent } from './components/paginated-table/paginated-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableRoutingModule } from './table-routing.module';


@NgModule({
  declarations: [
    PaginatedTableComponent,
    TablePageComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TableModule { }
