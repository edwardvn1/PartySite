import { TestBed } from '@angular/core/testing';

import { ActivePanelService } from './active-panel.service';

describe('ActivePanelService', () => {
  let service: ActivePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
