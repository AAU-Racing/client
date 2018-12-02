import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { RealtimeComponent } from './realtime/realtime.component';

/**
 * This module should contain information related to the charting.
 * It should display configurable charts with the possibility of scrolling in imported data,
 * or just display realtime data.
 * The realtime data should not be configurable from this screen.
 */

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
