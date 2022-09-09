import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivePanelService {

  constructor() { }
  activePanel = 0;
}

