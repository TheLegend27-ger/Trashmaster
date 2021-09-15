import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploaderTipsOverviewComponent } from './data-uploader-tips-overview.component';

describe('DataUploaderTipsOverviewComponent', () => {
  let component: DataUploaderTipsOverviewComponent;
  let fixture: ComponentFixture<DataUploaderTipsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUploaderTipsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUploaderTipsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
