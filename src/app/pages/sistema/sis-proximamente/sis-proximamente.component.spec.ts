import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisProximamenteComponent } from './sis-proximamente.component';

describe('SisProximamenteComponent', () => {
  let component: SisProximamenteComponent;
  let fixture: ComponentFixture<SisProximamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisProximamenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SisProximamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
