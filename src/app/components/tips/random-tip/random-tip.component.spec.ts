import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTipComponent } from './random-tip.component';

describe('RandomTipComponent', () => {
  let component: RandomTipComponent;
  let fixture: ComponentFixture<RandomTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
