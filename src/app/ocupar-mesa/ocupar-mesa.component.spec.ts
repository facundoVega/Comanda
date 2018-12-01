import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcuparMesaComponent } from './ocupar-mesa.component';

describe('OcuparMesaComponent', () => {
  let component: OcuparMesaComponent;
  let fixture: ComponentFixture<OcuparMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcuparMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcuparMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
