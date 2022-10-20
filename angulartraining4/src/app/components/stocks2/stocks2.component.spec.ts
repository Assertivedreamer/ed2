import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stocks2Component } from './stocks2.component';

describe('Stocks2Component', () => {
  let component: Stocks2Component;
  let fixture: ComponentFixture<Stocks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stocks2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stocks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
