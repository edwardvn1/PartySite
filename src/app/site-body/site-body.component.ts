import { Component, OnInit, Output } from '@angular/core';
import { ActivePanelService } from '../active-panel.service';

@Component({
  selector: 'app-site-body',
  templateUrl: './site-body.component.html',
  styleUrls: ['./site-body.component.css']
})
export class SiteBodyComponent implements OnInit {

  panelEnum = 0;
  constructor(activePanelService: ActivePanelService) {
    activePanelService.activePanel = this.panelEnum;
   }

  ngOnInit(): void {
  }

  onPanelClick(value: number){
    this.panelEnum = value;
  }

}
