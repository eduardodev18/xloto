import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoDoisComponent } from './servico-dois.component';

describe('ServicoDoisComponent', () => {
  let component: ServicoDoisComponent;
  let fixture: ComponentFixture<ServicoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
