import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTipsComponent } from './components/tips/all-tips/all-tips.component';
import { DataUploaderComponent } from './components/data-uploader/data-uploader.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { OneTipComponent } from './components/tips/one-tip/one-tip.component';
import { DataUploaderTipsEditorComponent } from './components/data-uploader/data-uploader-tips-editor/data-uploader-tips-editor.component';
import { DataUploaderQuestionsEditorComponent } from './components/data-uploader/data-uploader-questions-editor/data-uploader-questions-editor.component';
import { Category1Component } from './components/tips/all-tips/category1/category1.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FullquizComponent } from './components/quiz/fullquiz/fullquiz.component';
import { AllPostsComponent } from './components/trash-talk/one-post/all-posts/all-posts/all-posts.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent , data: { animation: 'MainPage' }},
  { path: 'alltips', component: AllTipsComponent ,data:{animation: 'Alltips'} },
  { path: 'alltips/allgemein', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'alltips/blau', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'alltips/gelb', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'alltips/braun', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'alltips/glas', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'alltips/schwarz', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'alltips/sondermuell', component: Category1Component ,data:{animation: 'ATunder'}},
  { path: 'data', component: DataUploaderComponent ,data:{animation: 'Data'}},
  { path: 'edittip/:tipId', component: DataUploaderTipsEditorComponent ,data:{animation: 'Dataunder'}},
  { path: 'edittip', component: DataUploaderTipsEditorComponent ,data:{animation: 'Dataunder'}},
  { path: 'editquestion', component: DataUploaderQuestionsEditorComponent ,data:{animation: 'Dataunder'}},
  { path: 'editquestion/:questionId', component: DataUploaderQuestionsEditorComponent ,data:{animation: 'Dataunder'}},
  { path: 'questionnaire', component: QuestionnaireComponent ,data:{animation: 'Questionnaire'}},
  { path: 'quiz', component: QuizComponent ,data:{animation: 'Quiz'}},
  { path: 'fullquiz', component: FullquizComponent ,data:{animation: 'FullQuiz'}},
  { path: 'forum', component: AllPostsComponent,data:{animation: 'Forum'}}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
