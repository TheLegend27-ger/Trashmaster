import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTipsComponent } from './components/tips/all-tips/all-tips.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { DataUploaderComponent } from './components/data-uploader/data-uploader.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { OneTipComponent } from './components/tips/one-tip/one-tip.component';
import { OneQuestionComponent } from './components/quiz/one-question/one-question.component';
import { DataUploaderTipsEditorComponent } from './components/data-uploader/data-uploader-tips-editor/data-uploader-tips-editor.component';
import { DataUploaderQuestionsEditorComponent } from './components/data-uploader/data-uploader-questions-editor/data-uploader-questions-editor.component';
import { Category1Component } from './components/tips/all-tips/category1/category1.component';
import { SomeTipsComponent } from './components/tips/some-tips/some-tips.component';



const routes: Routes = [
  { path: '', component: SomeTipsComponent },
  { path: 'alltips', component: AllTipsComponent },
  { path: 'alltips/allgemein', component: Category1Component },
  { path: 'alltips/blau', component: Category1Component },
  { path: 'alltips/gelb', component: Category1Component },
  { path: 'alltips/braun', component: Category1Component },
  { path: 'alltips/glas', component: Category1Component },
  { path: 'alltips/schwarz', component: Category1Component },
  { path: 'alltips/sondermuell', component: Category1Component },
  { path: 'data', component: DataUploaderComponent },
  { path: 'edittip/:tipId', component: DataUploaderTipsEditorComponent },
  { path: 'edittip', component: DataUploaderTipsEditorComponent },
  { path: 'editquestion', component: DataUploaderQuestionsEditorComponent },
  { path: 'editquestion/:questionId', component: DataUploaderQuestionsEditorComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'quiz', component: OneQuestionComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
