import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPanelComponent } from './fees-panel.component';

describe('FeesPanelComponent', () => {
  let component: FeesPanelComponent;
  let fixture: ComponentFixture<FeesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
