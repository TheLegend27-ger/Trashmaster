//#region Imports
import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TipData } from '../models/tip.model';
import { QuestionData } from '../models/question.model';
//#endregion



@Injectable({providedIn: 'root'})
export class componentService{

  constructor(private http: HttpClient, private router:Router){}



  //#region UpdateListeners
  getTipsUpdateListener() {
   return this.tipsUpdated.asObservable();
  }
  getQuestionsUpdateListener() {
    return this.questionsUpdated.asObservable();
   }
  getNgIfUpdateListener() {
    return this.ngIfSubject.asObservable();
   }
  //#endregion

  //#region User Navigation
  navigateToRoot(){
    this.router.navigate(["/"])
  }
  navigateToDataUploader() {
    this.router.navigate(["/data"])
  }
  //#endregion

  //#region Tips
  private tipsUpdated = new Subject<TipData[]>();
  //Lokale Instanz der Tips
  private tips: TipData[] =[];
  //Temporäre Instanz der Tips (editierbar)
  private categoryTips: TipData[] =[];
  //return checker
  private directReturn = false;
  //Temporärer Tip
  private tempTip!: TipData;
  private ngIfSubject = new Subject<boolean>();
  private ngIf = false;

  showTip(){
    this.ngIfSubject.next(true)
  }

  getTips(): void{
    this.http
      .get<{message: string, tips: any}>('http://localhost:3000/api/tips')
      .pipe(map((tipData:any) => {
        return tipData.tips.map((tip:any) => {
          return{
            id: tip._id,
            Title: tip.Title,
            Text: tip.Text,
            TipType: tip.TipType,
            ImageBase64: tip.ImageBase64
          }
        })
      }))
      .subscribe((transformedTips) => {
        this.tips = transformedTips
        this.tipsUpdated.next([...this.tips])
      });
  }
  //Rückgabe eines zufälligen Tipps aller bestehenden Tipps
  //Initialisieren der categoryTips und reset der directReturn Variable
  setCategoryTips() {
    console.log("setCategoryTips")
    this.categoryTips = [...this.tips]
    console.log(this.categoryTips)
    this.directReturn = false;
  }
  getSingleTipByCategory(tipType: any) {
    let escape = false
    if (this.directReturn){
      return{
        id: "Empty",
        Title: "Empty",
        Text: "Empty",
        TipType: "Empty",
        ImageBase64: "Empty"
      }
    }
    for ( let i = 0 ; i < this.categoryTips.length; i++){
      if (this.categoryTips[i].TipType === tipType){
        console.log("check-here")
        this.tempTip = this.categoryTips[i]
        this.categoryTips.splice(i ,1);
        escape = true;
      }
      if (escape == true){
        return this.tempTip
      }
    }
    if (escape == false){
      this.directReturn = true
    }
    return{
      id: "Empty",
      Title: "Empty",
      Text: "Empty",
      TipType: "Empty",
      ImageBase64: "Empty"
    }
  }
  //Löschung eines Tipps anhand der ID
  deletetip(tipId: any) {
    this.http.delete('http://localhost:3000/api/tips/' + tipId)
    .subscribe(() =>{
      const updatedTips = this.tips.filter(tip => tip.id !== tipId)
      this.tips = updatedTips;
      this.tipsUpdated.next([...this.tips]);
      console.log('Deleted!')
    });
  }
  //Abrufen eines Tipps anhand der ID
  getSingleTip (tipId: any){
    return this.http.get<{ _id: string, Title: string, Text: string, TipType: string; ImageBase64: string }>(
      "http://localhost:3000/api/tips/" + tipId
    );
  }
  //Aktualisierung eines Tipps anhand der ID und mit Payload
  updateTip(id:any ,tip: TipData){
    const tipToUpdate: TipData={
      id: tip.id,
      Title: tip.Title,
      Text: tip.Text,
      TipType: tip.TipType,
      ImageBase64: tip.ImageBase64
    }
    console.log(id)
    this.http.put('http://localhost:3000/api/tips/' + id , tipToUpdate)
      .subscribe(response => {
        console.log(response)
        this.navigateToDataUploader();
      });
  }
  //Hinzufügen eines neuen Tipp zur Datenbank
  addTip(tip: TipData){
    console.log(tip)
    this.http.post<{message: string}>('http://localhost:3000/api/tips/', tip)
      .subscribe((responseData) =>{
        this.tips.push(tip);
        this.tipsUpdated.next([...this.tips]);
        this.navigateToDataUploader();
      });
  }
  //#endregion

  //#region Questions
  private questionsUpdated = new Subject<QuestionData[]>();
  //Lokale Instanz der Questions
  private questions: QuestionData[] =[];


  getQuestions(){
    console.log("getquestions")
    this.http
      .get<{message: string, questions: any}>('http://localhost:3000/api/questions/')
      .pipe(map((questionData) => {
        return questionData.questions.map((question:any) => {
          return{
            id: question._id,
            Title: question.Title,
            Question: question.Question,
            Answer1: question.Answer1,
            Answer2: question.Answer2,
            Answer3: question.Answer3,
            Answer4: question.Answer4,
            Answer: question.Answer,
            QuestionType: question.QuestionType
          }
        })
      }))
      .subscribe((transformedQuestions) => {
        this.questions = transformedQuestions;
        this.questionsUpdated.next([...this.questions])
        console.log(transformedQuestions)
      });
  }

  //Aktualisierung der Fragen anhand von ID und mit Payload
  updateQuestion(id: any, question: QuestionData) {
    console.log("updateQuestion")
    this.http.put('http://localhost:3000/api/questions/' + id , question)
      .subscribe(response => {
        console.log(response)
        this.navigateToDataUploader();
      });
  }
  //Hinzufügen einer Frage
  addQuestion(question: QuestionData) {
    console.log("addQuestion")
    console.log(question)
    this.http.post<{message: string}>('http://localhost:3000/api/questions/', question)
      .subscribe((responseData) =>{
        this.questions.push(question);
        this.questionsUpdated.next([...this.questions]);
        this.navigateToDataUploader();
      });
  }
  //Abrufen einer Frage anhand der ID
  getSingleQuestion(questionId: any){
    console.log("getSingleQuestion")
    return this.http.get<{ _id: string, Title: string, Question: string, Answer1: string, Answer2: string, Answer3: string, Answer4: string,  Answer: string, QuestionType: string }>(
      "http://localhost:3000/api/questions/" + questionId
    );
  }
  //Löschen einer Frage anhand der ID
  deletequestion(questionId: any) {
    console.log("deletequestion")
    this.http.delete('http://localhost:3000/api/questions/' + questionId)
    .subscribe(() =>{
      const updatedQuestions = this.questions.filter(question => question.id !== questionId)
      this.questions = updatedQuestions;
      this.questionsUpdated.next([...this.questions]);
      console.log('Deleted!')
    });
  }
  //#endregion

  //#region Questionnaire
  findQuestionnaireAnswer(myFormAnswsers: any[]) {
    throw new Error('Method not implemented.');
  }
  //#endregion
}



