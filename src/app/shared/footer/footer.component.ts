import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/service/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today: Date;

  constructor(private _versionService: VersionService) { }

  ngOnInit() {
    
  }

}
