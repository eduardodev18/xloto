import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoGestaoComponent } from './simulacao-gestao.component';

describe('SimulacaoGestaoComponent', () => {
  let component: SimulacaoGestaoComponent;
  let fixture: ComponentFixture<SimulacaoGestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoGestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
