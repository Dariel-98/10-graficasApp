import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [350, 450, 100] },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = ['#28E0B9', '#2891E0', '28CBE0'];

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // ? Esta es una variante para hacer el llamado del objeto que esta dentro
    // ? de la peticion Http.
    // this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values: number[] = Object.values(data);
    //   console.log(values);
    //   console.log(labels);
    //   this.doughnutChartData.labels = labels;
    //   this.doughnutChartData.datasets.push({ data: values });
    // });

    // * Este es la otra variante, la cual utiliza operadores de RXJS,
    // * en especial el operador 'map()'.
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push({ data: values });
      });
  }
}
