import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullquizComponent } from './fullquiz.component';

describe('FullquizComponent', () => {
  let component: FullquizComponent;
  let fixture: ComponentFixture<FullquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
