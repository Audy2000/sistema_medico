import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarValidacionUsuarioMedicoComponent } from './listar-validacion-usuario-medico.component';

describe('ListarValidacionUsuarioMedicoComponent', () => {
  let component: ListarValidacionUsuarioMedicoComponent;
  let fixture: ComponentFixture<ListarValidacionUsuarioMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarValidacionUsuarioMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarValidacionUsuarioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
