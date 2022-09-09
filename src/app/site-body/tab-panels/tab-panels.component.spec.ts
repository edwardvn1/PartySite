import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelsComponent } from './tab-panels.component';

describe('TabPanelsComponent', () => {
  let component: TabPanelsComponent;
  let fixture: ComponentFixture<TabPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
