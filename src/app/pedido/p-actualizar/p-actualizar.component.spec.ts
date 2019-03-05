import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PActualizarComponent } from './p-actualizar.component';

describe('PActualizarComponent', () => {
  let component: PActualizarComponent;
  let fixture: ComponentFixture<PActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
