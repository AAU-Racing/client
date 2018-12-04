import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor() { }

  getVersion(): String {
    return "1.0";
  }
}
