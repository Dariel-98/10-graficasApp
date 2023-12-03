import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() bubble: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: '#9752FA',
        hoverBackgroundColor: 'blue',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: '#FA52E6',
        hoverBackgroundColor: 'blue',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series C',
        backgroundColor: '#CE52FA',
        hoverBackgroundColor: 'blue',
      },
    ],
  };

  ngOnInit(): void {
    if (this.bubble) {
      this.barChartType = 'bubble';
    }
  }
}
