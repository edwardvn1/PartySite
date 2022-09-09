import { Component, OnInit } from '@angular/core';
import { ActivePanelService } from '../active-panel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  panelEnum = 0;

  constructor(activePanelService: ActivePanelService) {
    activePanelService.activePanel = this.panelEnum;
  }

  ngOnInit(): void {
  }

  setPanel(value: number) {
    this.panelEnum = value;
  }
}
