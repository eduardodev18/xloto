import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoVendasComponent } from './simulacao-vendas.component';

describe('SimulacaoVendasComponent', () => {
  let component: SimulacaoVendasComponent;
  let fixture: ComponentFixture<SimulacaoVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
