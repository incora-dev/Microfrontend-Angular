import { Component, OnInit } from '@angular/core';
import { BarChartPoint } from '../components/charts/bar/bar.component';
import { PieChartPoint } from '../components/charts/pie/pie.component';
import { ScatterChartPoint } from '../components/charts/scatter/scatter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  data: BarChartPoint[] = [
    { label: 'Vue', y: 166443 },
    { label: 'React', y: 150793 },
    { label: 'Angular', y: 62342 },
    { label: 'Backbone', y: 27647 },
    { label: 'Ember', y: 21471 },
  ];
  pieData: PieChartPoint[] = [
    { label: 'Vue', value: 166443 },
    { label: 'React', value: 150793 },
    { label: 'Angular', value: 62342 },
    { label: 'Backbone', value: 27647 },
    { label: 'Ember', value: 21471 },
  ];
  scatterData: ScatterChartPoint[] = [
    {label: 'Vue', y: 166443, x: 2014},
    {label: 'React', y: 150793, x: 2013},
    {label: 'Angular', y: 62342, x: 2016},
    {label: 'Backbone', y: 27647, x: 2010},
    {label: 'Ember', y: 21471, x: 2011},
  ];

  ngOnInit() {
  }

}
