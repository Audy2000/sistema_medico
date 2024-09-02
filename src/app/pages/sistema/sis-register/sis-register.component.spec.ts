import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisRegisterComponent } from './sis-register.component';

describe('SisRegisterComponent', () => {
  let component: SisRegisterComponent;
  let fixture: ComponentFixture<SisRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SisRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
