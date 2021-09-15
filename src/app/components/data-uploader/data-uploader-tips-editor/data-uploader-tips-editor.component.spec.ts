import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploaderTipsEditorComponent } from './data-uploader-tips-editor.component';

describe('DataUploaderTipsEditorComponent', () => {
  let component: DataUploaderTipsEditorComponent;
  let fixture: ComponentFixture<DataUploaderTipsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUploaderTipsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUploaderTipsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
