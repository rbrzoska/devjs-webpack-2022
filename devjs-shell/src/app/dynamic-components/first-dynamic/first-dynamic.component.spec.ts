import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDynamicComponent } from './first-dynamic.component';

describe('FirstDynamicComponent', () => {
  let component: FirstDynamicComponent;
  let fixture: ComponentFixture<FirstDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
