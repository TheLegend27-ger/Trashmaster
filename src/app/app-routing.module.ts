import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTipsComponent } from './components/all-tips/all-tips.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { DataUploaderComponent } from './components/data-uploader/data-uploader.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: AppWrapperComponent },
  { path: 'alltips', component: AllTipsComponent },
  { path: 'data', component: DataUploaderComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'quiz', component: QuizComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
