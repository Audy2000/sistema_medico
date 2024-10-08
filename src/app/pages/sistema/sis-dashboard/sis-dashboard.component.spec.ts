import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisDashboardComponent } from './sis-dashboard.component';

describe('SisDashboardComponent', () => {
  let component: SisDashboardComponent;
  let fixture: ComponentFixture<SisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
