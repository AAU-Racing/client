import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { InventoryComponent } from './inventory.component';

/**
 * This component should contain the inventory management system.
 * The workshop is the primary usecase so it should be divided into
 * location groups -> locations (bookcases or cabinets) -> shelves.
 * It would be nice to include the following:
 * - List of equipment for training
 * - List of equipment for competition
 * - A distributed checklist (people can use their own device for checking off the equipment)
 */

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
