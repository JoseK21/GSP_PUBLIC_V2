import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCrearComponent } from './p-crear.component';

describe('PCrearComponent', () => {
  let component: PCrearComponent;
  let fixture: ComponentFixture<PCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
