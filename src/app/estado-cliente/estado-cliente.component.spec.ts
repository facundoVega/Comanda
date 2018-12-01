import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoClienteComponent } from './estado-cliente.component';

describe('EstadoClienteComponent', () => {
  let component: EstadoClienteComponent;
  let fixture: ComponentFixture<EstadoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
