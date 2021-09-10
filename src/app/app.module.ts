import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material'; //Material Module import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AllTipsComponent } from './components/all-tips/all-tips.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';


@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    HeaderComponent,
    QuizComponent,
    AllTipsComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
