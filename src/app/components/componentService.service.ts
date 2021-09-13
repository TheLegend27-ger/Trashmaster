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

  //#region getTips
  getTips(){
    this.http
      .get<{message: string, tips: any}>('http://localhost:3000/api/gettips')
      .pipe(map((tipData) => {
        return tipData.tips.map((tip:any) => {
          return{
            id: tip._id,
            Title: tip.Title,
            Text: tip.Text,
            ImageNumber: tip.ImageNumber
          }
        })
      }))
      .subscribe((transformedTips) => {
        this.tips = transformedTips;
        this.tipsUpdated.next([...this.tips])
        console.log(transformedTips)
      });
  }
  //#endregion
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
  //#endregion



/*
  //#region getSingleClinic
  getSingleClinic(clinicId: any){
    return {...this.clinics.find(clinic => clinic.id === clinicId)}
  }
  //#endregion

  //#region updateClinic
  updateClinic(id:any ,clinic: ClinicData){
    const clinicToUpdate: ClinicData={
      id: clinic.id,
      ClinicName: clinic.ClinicName,
      ClinicDepartment: clinic.ClinicDepartment,
      ClinicAdr1: clinic.ClinicAdr1,
      ClinicAdr2: clinic.ClinicAdr2,
      ClinicZIP: clinic.ClinicZIP,
      ClinicCity: clinic.ClinicCity,
      ClinicSP: clinic.ClinicSP,
      ClinicCountry: clinic.ClinicCountry,
      ClinicCountryCode: clinic.ClinicCountry,
      ClinicPhone: clinic.ClinicPhone,
      ClinicLa: clinic.ClinicLa,
      ClinicLo: clinic.ClinicLo,
      SysLog: clinic.SysLog,
    }
    console.log(id)
    this.http.put('http://localhost:3000/api/updateclinic/' + id , clinicToUpdate)
      .subscribe(response => {
        console.log(response)
        this.navigateToRoot();
      });
  }
  //#endregion

  //#region getClinicsUpdateListener
  getTipsUpdateListener(){
    return this.tipsUpdated.asObservable();
  }
  //#endregion

  //#region addClinic
  addClinic(clinic: ClinicData){
    this.http.post<{message: string}>('http://localhost:3000/api/addclinic', clinic)
      .subscribe((responseData) =>{
        this.clinics.push(clinic);
        this.clinicsUpdated.next([...this.clinics]);
        this.navigateToRoot();
      });
  }
  //#endregion

  //#region deleteClinic
  deleteClinic(clinicId: any){
    this.http.delete('http://localhost:3000/api/deleteclinic/' + clinicId)
    .subscribe(() =>{
      const updatedClinics = this.clinics.filter(clinic => clinic.id !== clinicId)
      this.clinics = updatedClinics;
      this.clinicsUpdated.next([...this.clinics]);
      console.log('Deleted!')
    });
*/
}
  //#endregion



  //#endregion

