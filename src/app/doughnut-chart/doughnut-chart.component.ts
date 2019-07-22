import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  public doughnutChartLabels = ['Angular Developer', 'React Devekoper', 'NodeJS Developer', 'Java Developer'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';


}
