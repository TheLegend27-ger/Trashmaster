import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTipComponent } from './one-tip.component';

describe('OneTipComponent', () => {
  let component: OneTipComponent;
  let fixture: ComponentFixture<OneTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
