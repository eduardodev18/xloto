import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DificuldadesComponent } from './dificuldades.component';

describe('DificuldadesComponent', () => {
  let component: DificuldadesComponent;
  let fixture: ComponentFixture<DificuldadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DificuldadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DificuldadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
