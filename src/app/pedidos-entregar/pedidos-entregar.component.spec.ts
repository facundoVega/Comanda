import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEntregarComponent } from './pedidos-entregar.component';

describe('PedidosEntregarComponent', () => {
  let component: PedidosEntregarComponent;
  let fixture: ComponentFixture<PedidosEntregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosEntregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEntregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
