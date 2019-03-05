import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEliminarComponent } from './p-eliminar.component';

describe('PEliminarComponent', () => {
  let component: PEliminarComponent;
  let fixture: ComponentFixture<PEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
