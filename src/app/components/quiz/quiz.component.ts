import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QuestionData } from 'src/app/models/question.model';


import { componentService } from '../componentService.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],

})
export class QuizComponent implements OnInit, OnDestroy {
  @Input() questions: QuestionData[] = [];
  @ViewChild('titleContainer', { static: true }) public titleContainer: any;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  public newElement!: any;

  constructor(private _formBuilder: FormBuilder, private componentService: componentService) {}
  private questionsSub: Subscription = new Subscription();
  ngOnInit() {
    this.componentService.getQuestions();
    this.questionsSub = this.componentService
      .getQuestionsUpdateListener()
      .subscribe((questions: QuestionData[]) => {
        this.questions = questions;
        /*this.dataSource = new MatTableDataSource(this.questions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          this.isLoading = false;
        }, 1);*/
        let radiotxt = document.getElementsByClassName("radiotxt")
        let radio = document.getElementsByClassName("radio")
        let radiobtn = document.getElementsByClassName("mat-radio-label-content")
        let categories = ["allgemein", "blau"]  //dynamisch holen
        let counter = 0;
        let tempquestions = [...this.questions]
        for (let j = 0; j < categories.length; j++){
          let radiotxt = document.getElementsByClassName(categories[j])
          for (let i = 0; i < 6; i++ ){
            let tempQuestion = tempquestions.findIndex(element => element.QuestionType == categories[j])
            radiotxt[i].innerHTML = tempquestions[tempQuestion].Title
            console.log(radiobtn[counter].innerHTML)
            radiobtn[counter].textContent=  tempquestions[tempQuestion].Answer1
            radiobtn[counter + 1].textContent =   tempquestions[tempQuestion].Answer2
            radiobtn[counter + 2].textContent =  tempquestions[tempQuestion].Answer3
            radiobtn[counter + 3].textContent =   tempquestions[tempQuestion].Answer4
            counter = counter + 4
            tempquestions.splice(tempQuestion, 1)
          }
        }
      });




    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  //#region ngOnDestroy
  ngOnDestroy(){
    console.log(this.questions)
  }
  //#endregion

  ngAfterViewInit(){


  }
}
