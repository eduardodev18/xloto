import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompradoresComponent } from './modal-compradores.component';

describe('ModalCompradoresComponent', () => {
  let component: ModalCompradoresComponent;
  let fixture: ComponentFixture<ModalCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
