import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraColetivaComponent } from './compra-coletiva.component';

describe('CompraColetivaComponent', () => {
  let component: CompraColetivaComponent;
  let fixture: ComponentFixture<CompraColetivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraColetivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraColetivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
