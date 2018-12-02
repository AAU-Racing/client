import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import/import.component';
import { RealtimeComponent } from './realtime/realtime.component';

/**
 * This module should contain everything related to data.
 * Importing data from the SD-card in various formats,
 * importing data from the CANbus logger,
 * or setting up realtime data import using serial ports.
 * It would be nice to implement a local datasharing service such that
 * different clients could benefit from the same data without being connected to the internet.
 */

@NgModule({
  declarations: [
    ImportComponent,
    RealtimeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataModule { }
