import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RActualizarComponent } from './r-actualizar.component';

describe('RActualizarComponent', () => {
  let component: RActualizarComponent;
  let fixture: ComponentFixture<RActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
