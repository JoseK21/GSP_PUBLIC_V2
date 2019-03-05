import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCrearComponent } from './r-crear.component';

describe('RCrearComponent', () => {
  let component: RCrearComponent;
  let fixture: ComponentFixture<RCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
