//#region Imports
import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TipData } from '../models/tip.model';
import { QuestionData } from '../models/question.model';
import { PostData } from '../models/post.model';
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

  private searchbarVisibility!:boolean;
  getSearchbarVisibility() {
    return this.searchbarVisibility;
  }
  setSearchbarVisibility(isVisible : boolean){
    this.searchbarVisibility = isVisible
  }
  private origin = ''
  setOrigin(origin: string){
    this.origin = origin
  }
  getOrigin(){
    return this.origin
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
    console.log("getTips()")
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
    while (!this.categoryTips){
      console.log(this.categoryTips)
    }


    this.directReturn = false;
  }
  getSingleTipLocal(tipType: any, keyword: any) {
    keyword = keyword.toLowerCase()
    let escape = false
    if (this.directReturn == false) {
      for ( let i = 0 ; i < this.categoryTips.length; i++){
        if (tipType === "search"){
          //SUCHE NACH INHALT IN TIPPS
          if (this.categoryTips[i].TipType.toLowerCase().includes(keyword) ||
          this.categoryTips[i].Text.toLowerCase().includes(keyword) ||
          this.categoryTips[i].Title.toLowerCase().includes(keyword) ||
          this.categoryTips[i].id.toLowerCase().includes(keyword) ){
            //console.log("check-here")
            this.tempTip = this.categoryTips[i]
            this.categoryTips.splice(i ,1);
            escape = true;
          }
        }else{
          if (this.categoryTips[i].TipType === tipType ){
            //console.log("check-here")
            this.tempTip = this.categoryTips[i]
            this.categoryTips.splice(i ,1);
            escape = true;
          }
        }
        if (escape == true){
          return this.tempTip
        }
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
  getSingleTipFromDatabase (tipId: any){
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

  //#region Posts
  private postsUpdated = new Subject<PostData[]>();
  //Lokale Instanz der Questions
  private posts: PostData[] =[];


  getPosts(){
    console.log("getPOSTS")
    this.http
      .get<{message: string, posts: any}>('http://localhost:3000/api/posts/')
      .pipe(map((PostData) => {
        return PostData.posts.map((post:any) => {
          return{
            id: post._id,
            Title: post.Title,
            Text: post.Text,
          }
        })
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts])
        console.log(transformedPosts)
      });
  }

  //Aktualisierung der Fragen anhand von ID und mit Payload
  updatePost(id: any, post: PostData) {
    console.log("updatePost")
    this.http.put('http://localhost:3000/api/posts/' + id , post)
      .subscribe(response => {
        console.log(response)
        this.navigateToDataUploader();
      });
  }
  //Hinzufügen einer Frage
  addPost(post: PostData) {
    console.log("addPost")
    console.log(post)
    this.http.post<{message: string}>('http://localhost:3000/api/posts/', post)
      .subscribe((responseData) =>{
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.navigateToDataUploader();
      });
  }
  //Abrufen einer Frage anhand der ID
  getSinglePost(postId: any){
    console.log("getSingleQuestion")
    return this.http.get<{ _id: string, Title: string, Text: string}>(
      "http://localhost3000/api/posts/" + postId

    );
  }
  //Löschen einer Frage anhand der ID
  deletepost(postId: any) {
    console.log("deletequestion")
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() =>{
      const updatedPosts = this.posts.filter(post => post.id !== postId)
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
      console.log('Deleted!')
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



