import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { RealtimeComponent } from './realtime/realtime.component';

@NgModule({
  declarations: [
    RealtimeComponent,
    ChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
