import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import/import.component';
import { RealtimeComponent } from './realtime/realtime.component';

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
