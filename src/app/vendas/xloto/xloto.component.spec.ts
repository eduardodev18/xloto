import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlotoComponent } from './xloto.component';

describe('XlotoComponent', () => {
  let component: XlotoComponent;
  let fixture: ComponentFixture<XlotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XlotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XlotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
