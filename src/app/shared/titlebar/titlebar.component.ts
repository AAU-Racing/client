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
    this.window = this._electronService.remote.BrowserWindow;
  }

  minimize() {
    this.window.getFocusedWindow().minimize();
  }

  maximize() {
    if (this.window.getFocusedWindow().isMaximized()) {
      this.window.getFocusedWindow().unmaximize();
    }
    else {
      this.window.getFocusedWindow().maximize();
    }
  }

  close() {
    this.window.getFocusedWindow().close();
  }
}
