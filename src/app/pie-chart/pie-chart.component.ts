import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent{

  public pieChartLabels = ['Angular Developer', 'React Devekoper', 'NodeJS Developer', 'Java Developer'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

}
