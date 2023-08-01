import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoTresComponent } from './servico-tres.component';

describe('ServicoTresComponent', () => {
  let component: ServicoTresComponent;
  let fixture: ComponentFixture<ServicoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
