import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionPaginasComponent } from './navegacion-paginas.component';

describe('NavegacionPaginasComponent', () => {
  let component: NavegacionPaginasComponent;
  let fixture: ComponentFixture<NavegacionPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionPaginasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegacionPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
