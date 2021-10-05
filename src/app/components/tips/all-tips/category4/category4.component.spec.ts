import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category4Component } from './category4.component';

describe('Category4Component', () => {
  let component: Category4Component;
  let fixture: ComponentFixture<Category4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
