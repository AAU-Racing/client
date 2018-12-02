import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { ConsolefComponent } from './console/console.component';
import { BootloaderComponent } from './bootloader.component';

/**
 * This module should contain pages related to uploading code to the bootloader.
 * This includes wireless and wired upload of code, and console for debugging.
 * It is argueable whether this module or another should contain the console.
 * One possibility is to promote the console to a shared component that can be used in several pages.
 */

@NgModule({
  declarations: [
    UploadComponent,
    ConsolefComponent,
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
