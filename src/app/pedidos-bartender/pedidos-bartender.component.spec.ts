import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosBartenderComponent } from './pedidos-bartender.component';

describe('PedidosBartenderComponent', () => {
  let component: PedidosBartenderComponent;
  let fixture: ComponentFixture<PedidosBartenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosBartenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosBartenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
