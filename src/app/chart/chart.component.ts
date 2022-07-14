import { AssemblyService } from './../assembly.service';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartDataset,
  ChartEvent,
  ChartType,
  DatasetChartOptions,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IAssembly } from '../assembly';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  lineChartData!: ChartConfiguration['data'];
  pieChartData!: ChartConfiguration['data'];

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {},
      'y-axis-0': {
        position: 'left',
      },
    },
  };

  pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  lineChartType: ChartType = 'line';
  pieChartType: ChartType = 'pie';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  constructor(private assembly: AssemblyService) {
    Chart.register(ChartDataLabels);
  }

  ngOnInit(): void {
    document.title = 'Charts';
    this.assembly
      .getAssembly()
      .subscribe(({ data }: { data: IAssembly[] }) =>
        this.generateCharts(data)
      );
  }

  createDataset(label: string, color: string): ChartDataset {
    return {
      label: label,
      data: [],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
      backgroundColor: color,
      borderColor: color,
      pointBorderColor: color,
      pointHoverBackgroundColor: color,
      pointBackgroundColor: color,
    };
  }

  generateCharts(assembly: IAssembly[]) {
    const labels: string[] = [];
    const amountDatasets = 4;
    const datasets: ChartDataset[] = [];
    const colors = ['#8eb200', '#01b84b', '#0245b6', '#9200b9'];

    datasets.push(this.createDataset(`Всего`, '#b00100'));

    for (let i = 1; i <= amountDatasets; i++) {
      datasets.push(this.createDataset(`Этап ${i}`, colors[i - 1]));
    }

    assembly.reverse().forEach((item) => {
      labels.push(item.dt_date);
      datasets[0].data.push(item.qty_shk);
      datasets[1].data.push(item.qty_shk_cat1);
      datasets[2].data.push(item.qty_shk_cat2);
      datasets[3].data.push(item.qty_shk_cat3);
      datasets[4].data.push(item.qty_shk_cat4);
    });

    this.lineChartData = { labels, datasets };

    this.pieChartData = {
      labels: datasets.map((item) => item.label).slice(1),
      datasets: [
        {
          data: datasets
            .slice(1)
            .map((item) =>
              item.data.reduce((acc, val) => Number(val) + Number(acc), 0)
            ),
          backgroundColor: colors,
          borderColor: 'white',
          hoverBackgroundColor: colors,
          pointHoverBorderColor: colors,
          hoverBorderColor: colors,
        },
      ],
    };
  }
}
