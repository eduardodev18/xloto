import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDicasComponent } from './modal-dicas.component';

describe('ModalDicasComponent', () => {
  let component: ModalDicasComponent;
  let fixture: ComponentFixture<ModalDicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
