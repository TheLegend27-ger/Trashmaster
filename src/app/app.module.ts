import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AllTipsComponent } from './components/tips/all-tips/all-tips.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { DataUploaderComponent } from './components/data-uploader/data-uploader.component';
import { ConfirmDialogComponent } from './components/confirmationdialog/confirm-dialog.component';
import { DataUploaderTipsOverviewComponent } from './components/data-uploader/data-uploader-tips-overview/data-uploader-tips-overview.component';
import { DataUploaderQuestionsOverviewComponent } from './components/data-uploader/data-uploader-questions-overview/data-uploader-questions-overview.component';
import { DataUploaderQuestionsEditorComponent } from './components/data-uploader/data-uploader-questions-editor/data-uploader-questions-editor.component';
import { DataUploaderTipsEditorComponent } from './components/data-uploader/data-uploader-tips-editor/data-uploader-tips-editor.component';
import { SomeTipsComponent } from './components/tips/some-tips/some-tips.component';
import { OneTipComponent } from './components/tips/one-tip/one-tip.component';
import { OneQuestionComponent } from './components/quiz/one-question/one-question.component';
import { Category1Component } from './components/tips/all-tips/category1/category1.component';
import { RandomTipComponent } from './components/tips/random-tip/random-tip.component';


@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    HeaderComponent,
    QuizComponent,
    AllTipsComponent,
    QuestionnaireComponent,
    DataUploaderComponent,
    ConfirmDialogComponent,
    DataUploaderTipsOverviewComponent,
    DataUploaderQuestionsOverviewComponent,
    DataUploaderQuestionsEditorComponent,
    DataUploaderTipsEditorComponent,
    SomeTipsComponent,
    OneTipComponent,
    OneQuestionComponent,
    Category1Component,
    RandomTipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
