import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoOneComponent } from './promocao-one.component';

describe('PromocaoOneComponent', () => {
  let component: PromocaoOneComponent;
  let fixture: ComponentFixture<PromocaoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
