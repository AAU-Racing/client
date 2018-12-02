import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { PrintfComponent } from './printf/printf.component';
import { BootloaderComponent } from './bootloader.component';

@NgModule({
  declarations: [
    UploadComponent,
    PrintfComponent,
    BootloaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BootloaderComponent
  ]
})
export class BootloaderModule { }
