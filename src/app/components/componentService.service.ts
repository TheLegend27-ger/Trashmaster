//#region Imports
import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators'
//import { element } from 'protractor';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TipData } from '../models/tip.model';
import { QuestionData } from '../models/question.model';
//#endregion



@Injectable({providedIn: 'root'})
export class componentService{

  getTipsUpdateListener() {
   return this.tipsUpdated.asObservable();
  }



  constructor(private http: HttpClient, private router:Router){}

  //#region Example
  appwrapperUpdateListener(){
    return "" // this.someVariable.asObservable();
  }


  //#endregion

  //#region User Navigation
  navigateToRoot(){
    this.router.navigate(["/"])
  }
  //#endregion

  //#region Tips
  private tipsUpdated = new Subject<TipData[]>();
  //Lokale Instanz der Tips
  private tips: TipData[] =[];

  getTips(){
    this.http
      .get<{message: string, tips: any}>('http://localhost:3000/api/tips')
      .pipe(map((tipData:any) => {
        return tipData.tips.map((tip:any) => {
          return{
            id: tip._id,
            Title: tip.Title,
            Text: tip.Text,
            ImageBase64: tip.ImageBase64
          }
        })
      }))
      .subscribe((transformedTips) => {
        this.tips = transformedTips;
        this.tipsUpdated.next([...this.tips])
        console.log(transformedTips)
      });
  }
  getSomeTips(){

  }
  deletetip(tipId: any) {
    this.http.delete('http://localhost:3000/api/tips/' + tipId)
    .subscribe(() =>{
      const updatedTips = this.tips.filter(tip => tip.id !== tipId)
      this.tips = updatedTips;
      this.tipsUpdated.next([...this.tips]);
      console.log('Deleted!')
    });
  }
  getSingleTip (tipId: any){
    return this.http.get<{ _id: string, Title: string, Text: string, ImageBase64: string }>(
      "http://localhost:3000/api/tips/" + tipId
    );

  }
  updateTip(id:any ,tip: TipData){
    const tipToUpdate: TipData={
      id: tip.id,
      Title: tip.Title,
      Text: tip.Text,
      ImageBase64: tip.ImageBase64
    }
    console.log(id)
    this.http.put('http://localhost:3000/api/tips/' + id , tipToUpdate)
      .subscribe(response => {
        console.log(response)
        //this.navigateToRoot();
      });
  }
  addTip(tip: TipData){
    console.log(tip)
    this.http.post<{message: string}>('http://localhost:3000/api/tips/', tip)
      .subscribe((responseData) =>{
        this.tips.push(tip);
        this.tipsUpdated.next([...this.tips]);
        this.navigateToRoot();
      });
  }
  addImage(image:any){
    //-----------------------------------------
  }
  //#endregion

  //#region Questions
  private questionsUpdated = new Subject<QuestionData[]>();
  //Lokale Instanz der Questions
  private questions: QuestionData[] =[];

  //#region getQuestions
  getQuestions(){
    this.http
      .get<{message: string, questions: any}>('http://localhost:3000/api/getquestions')
      .pipe(map((questionData) => {
        return questionData.questions.map((question:any) => {
          return{
            id: question._id,
            Title: question.Title,
            Question: question.Question,
            AnswerOptions: question.AnswerOptions,
            Answer: question.Answer,
          }
        })
      }))
      .subscribe((transformedQuestions) => {
        this.questions = transformedQuestions;
        this.questionsUpdated.next([...this.questions])
        console.log(transformedQuestions)
      });
  }
  //#endregion
  //#region getQuestions
  getSingleQuestion(){

  }
  //#endregion
  //#endregion


}
  //#endregion
  //#endregion

