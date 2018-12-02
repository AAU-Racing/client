import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportComponent } from './data/import/import.component';
import { RealtimeComponent } from './data/realtime/realtime.component';
import { IndexComponent } from './chart/index/index.component';
import { UploadComponent } from './bootloader/upload/upload.component';
import { PrintfComponent } from './bootloader/printf/printf.component';
import { DetailsComponent } from './inventory/details/details.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material';
import { BootloaderComponent } from './bootloader/bootloader.component';
import { ChartComponent } from './chart/chart.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    RealtimeComponent,
    IndexComponent,
    UploadComponent,
    PrintfComponent,
    DetailsComponent,
    TopbarComponent,
    FooterComponent,
    BootloaderComponent,
    ChartComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
