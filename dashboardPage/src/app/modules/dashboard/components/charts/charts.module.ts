import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';



@NgModule({
  declarations: [BarComponent, PieComponent, ScatterComponent],
  imports: [
    CommonModule
  ],
  exports: [BarComponent, PieComponent, ScatterComponent]
})
export class ChartsModule { }
