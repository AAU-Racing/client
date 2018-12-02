import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [
    DetailsComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class InventoryModule { }
