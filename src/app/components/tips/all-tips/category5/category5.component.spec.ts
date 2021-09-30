import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category5Component } from './category5.component';

describe('Category5Component', () => {
  let component: Category5Component;
  let fixture: ComponentFixture<Category5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
