import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarValidacionUsuarioMedicoComponent } from './editar-validacion-usuario-medico.component';

describe('EditarValidacionUsuarioMedicoComponent', () => {
  let component: EditarValidacionUsuarioMedicoComponent;
  let fixture: ComponentFixture<EditarValidacionUsuarioMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarValidacionUsuarioMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarValidacionUsuarioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
