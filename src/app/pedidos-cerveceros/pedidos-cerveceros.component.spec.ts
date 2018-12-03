import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCervecerosComponent } from './pedidos-cerveceros.component';

describe('PedidosCervecerosComponent', () => {
  let component: PedidosCervecerosComponent;
  let fixture: ComponentFixture<PedidosCervecerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosCervecerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCervecerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
