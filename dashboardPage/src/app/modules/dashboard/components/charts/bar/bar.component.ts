import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

export interface BarChartPoint {
  y: number;
  label: string;
}

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() data: BarChartPoint[] = [];


  private svg: d3.Selection<SVGGElement, unknown, HTMLElement, any> | null = null;
  private margin = 50;
  private width = 300 - (this.margin * 2);
  private height = 200 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bar')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 2))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: BarChartPoint[]): void {
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.label))
    .padding(0.2);

    this.svg!.append('g')
    .attr('transform', 'translate(0,' + this.height + ')')
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end');

    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([this.height, 0]);

    this.svg!.append('g')
    .call(d3.axisLeft(y));

    this.svg!.selectAll('bars')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => x(d.label)!)
    .attr('y', d => y(d.y))
    .attr('width', x.bandwidth())
    .attr('height', (d) => this.height - y(d.y))
    .attr('fill', '#d04a35');
  }

}
