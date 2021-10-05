import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTipsComponent } from './components/tips/all-tips/all-tips.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { DataUploaderComponent } from './components/data-uploader/data-uploader.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SomeTipsComponent } from './components/tips/some-tips/some-tips.component';
import { OneTipComponent } from './components/tips/one-tip/one-tip.component';
import { OneQuestionComponent } from './components/quiz/one-question/one-question.component';
import { DataUploaderTipsEditorComponent } from './components/data-uploader/data-uploader-tips-editor/data-uploader-tips-editor.component';
import { DataUploaderQuestionsEditorComponent } from './components/data-uploader/data-uploader-questions-editor/data-uploader-questions-editor.component';
import { Category1Component } from './components/tips/all-tips/category1/category1.component';
import { Category2Component } from './components/tips/all-tips/category2/category2.component';
import { Category3Component } from './components/tips/all-tips/category3/category3.component';
import { Category4Component } from './components/tips/all-tips/category4/category4.component';
import { Category5Component } from './components/tips/all-tips/category5/category5.component';


const routes: Routes = [
  { path: '', component: SomeTipsComponent },
  { path: 'alltips', component: AllTipsComponent },
  { path: 'alltips/category1', component: Category1Component },
  { path: 'alltips/category2', component: Category2Component },
  { path: 'alltips/category3', component: Category3Component },
  { path: 'alltips/category4', component: Category4Component },
  { path: 'alltips/category5', component: Category5Component },
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
