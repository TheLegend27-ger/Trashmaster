import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploaderQuestionsOverviewComponent } from './data-uploader-questions-overview.component';

describe('DataUploaderQuestionsOverviewComponent', () => {
  let component: DataUploaderQuestionsOverviewComponent;
  let fixture: ComponentFixture<DataUploaderQuestionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUploaderQuestionsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUploaderQuestionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
