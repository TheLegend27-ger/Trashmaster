import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploaderQuestionsEditorComponent } from './data-uploader-questions-editor.component';

describe('DataUploaderQuestionsEditorComponent', () => {
  let component: DataUploaderQuestionsEditorComponent;
  let fixture: ComponentFixture<DataUploaderQuestionsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUploaderQuestionsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUploaderQuestionsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
