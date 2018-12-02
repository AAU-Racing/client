import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootloaderModule } from './bootloader/bootloader.module';
import { ChartModule } from './chart/chart.module';
import { DataModule } from './data/data.module';
import { InventoryModule } from './inventory/inventory.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootloaderModule,
    ChartModule,
    DataModule,
    InventoryModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
