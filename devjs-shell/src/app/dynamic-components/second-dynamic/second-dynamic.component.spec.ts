import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDynamicComponent } from './second-dynamic.component';

describe('SecondDynamicComponent', () => {
  let component: SecondDynamicComponent;
  let fixture: ComponentFixture<SecondDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
