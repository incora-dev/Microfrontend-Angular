import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

export interface PieChartPoint {
  label: string;
  value: number;
}

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() data: PieChartPoint[] = [];
  private svg: d3.Selection<SVGGElement, unknown, HTMLElement, any> | null = null;
  private margin = 50;
  private width = 300;
  private height = 200;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: d3.ScaleOrdinal<string, unknown, never> = d3.scaleOrdinal();

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private createSvg(): void {
    this.svg = d3.select('figure#pie')
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height)
    .append('g')
    .attr(
      'transform',
      'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
    );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.value.toString()))
    .range(['#c7d3ec', '#a5b8db', '#879cc4', '#677795', '#5a6782']);
  }

  private drawChart(): void {
    const pie = d3.pie<PieChartPoint>().value((d) => d.value);

    this.svg!
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius) as any
    )
    .attr('fill', (d, i) => (this.colors(i.toString()) as string))
    .attr('stroke', '#121926')
    .style('stroke-width', '1px');

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg!
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('text')
    .text(d => d.data.label)
    .attr('transform', d => 'translate(' + labelLocation.centroid(d as any) + ')')
    .style('text-anchor', 'middle')
    .style('font-size', 15);
  }
}
