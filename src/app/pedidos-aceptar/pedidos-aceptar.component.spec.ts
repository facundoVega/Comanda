import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAceptarComponent } from './pedidos-aceptar.component';

describe('PedidosAceptarComponent', () => {
  let component: PedidosAceptarComponent;
  let fixture: ComponentFixture<PedidosAceptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAceptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
