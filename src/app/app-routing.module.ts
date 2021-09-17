import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTipsComponent } from './components/tips/all-tips/all-tips.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { DataUploaderComponent } from './components/data-uploader/data-uploader.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SomeTipsComponent } from './components/tips/some-tips/some-tips.component';

const routes: Routes = [
  { path: '', component: SomeTipsComponent },
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
