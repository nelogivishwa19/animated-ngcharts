import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';


const routes: Routes = [
{ path: ' ',redirectTo:'pie', pathMatch: 'full'},
{ path: 'pie',component: PieChartComponent },
{ path: 'bar',component: BarChartComponent },
{ path: 'doughnut',component: DoughnutChartComponent },
{ path: 'radar',component: RadarChartComponent },
{ path: '**' ,component: PieChartComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
