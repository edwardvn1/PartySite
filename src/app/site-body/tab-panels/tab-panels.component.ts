import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivePanelService } from 'src/app/active-panel.service';

@Component({
  selector: 'app-tab-panels',
  templateUrl: './tab-panels.component.html',
  styleUrls: ['./tab-panels.component.css']
})
export class TabPanelsComponent implements OnInit {

 
  constructor(activePanel: ActivePanelService) { }

  ngOnInit(): void {
  }


}
