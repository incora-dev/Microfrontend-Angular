import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

export interface ScatterChartPoint {
  label: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {
  @Input() data: ScatterChartPoint[] = [];

  private svg: d3.Selection<SVGGElement, unknown, HTMLElement, any> | null= null;
  private margin = 50;
  private width = 300 - (this.margin * 2);
  private height = 200 - (this.margin * 2);
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot()
  }

  private createSvg(): void {
    this.svg = d3.select('figure#scatter')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 2))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawPlot(): void {
    const x = d3.scaleLinear()
    .domain([2009, 2017])
    .range([ 0, this.width ]);
    this.svg!.append('g')
    .attr('transform', 'translate(0,' + this.height + ')')
    .call(d3.axisBottom(x).tickFormat(d3.format('d')));

    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([ this.height, 0]);
    this.svg!.append('g')
    .call(d3.axisLeft(y));

    const dots = this.svg!.append('g');
    dots.selectAll('dot')
    .data(this.data)
    .enter()
    .append('circle')
    .attr('cx', d => x(d.x))
    .attr('cy', d => y(d.y))
    .attr('r', 7)
    .style('opacity', .5)
    .style('fill', '#69b3a2');

    dots.selectAll('text')
    .data(this.data)
    .enter()
    .append('text')
    .text(d => d.label)
    .attr('x', d => x(d.x) + 10)
    .attr('y', d => y(d.y))
  }

}
