import { Injectable } from '@angular/core';
import { NavMenuItem } from '../class/nav-menu-item';
import { NavMenuSubItem } from '../class/nav-menu-sub-item';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  menuItems: NavMenuItem[];

  constructor() { 
    let bootloader = new NavMenuItem("Bootloader", "bootloader");
    bootloader.addSubitem(new NavMenuSubItem("Upload", "bootloader/upload"));
    bootloader.addSubitem(new NavMenuSubItem("Console", "bootloader/console"));
    this.menuItems.push(bootloader);

    let chart = new NavMenuItem("Chart", "chart");
    chart.addSubitem(new NavMenuSubItem("Realtime", "chart/realtime"));
    this.menuItems.push(chart);
  }
}
