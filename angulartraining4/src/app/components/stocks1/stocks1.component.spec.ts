import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stocks1Component } from './stocks1.component';

describe('Stocks1Component', () => {
  let component: Stocks1Component;
  let fixture: ComponentFixture<Stocks1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stocks1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stocks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
