import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    MenubarComponent,
    FooterComponent,
    TitlebarComponent
  ],
  imports: [
    CommonModule,
    NgxElectronModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MenubarComponent,
    FooterComponent,
    TitlebarComponent
  ]
})
export class SharedModule { }
