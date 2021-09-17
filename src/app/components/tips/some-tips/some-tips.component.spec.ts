import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTipsComponent } from './some-tips.component';

describe('SomeTipsComponent', () => {
  let component: SomeTipsComponent;
  let fixture: ComponentFixture<SomeTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
