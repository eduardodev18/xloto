import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBeneficiosComponent } from './modal-beneficios.component';

describe('ModalBeneficiosComponent', () => {
  let component: ModalBeneficiosComponent;
  let fixture: ComponentFixture<ModalBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
