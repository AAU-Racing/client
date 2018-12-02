import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  window

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
    this.window = this._electronService.remote.BrowserWindow.getFocusedWindow();
  }

  minimize() {
    this.window.minimize();
  }

  maximize() {
    this.window.maximize();
  }

  close() {
    this.window.close();
  }
}
