import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { QuestionData } from 'src/app/models/question.model';
import { componentService } from '../componentService.service';
import { ConfirmDialogOkComponent, ConfirmDialogOkModel } from '../confirmationdialog/confirm-dialog-ok.component';
import { ConfirmDialogComponent } from '../confirmationdialog/confirm-dialog.component';

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
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  seventhFormGroup!: FormGroup;
  public newElement!: any;
  public nextStepWithoutConfirmDialog!: Boolean;
  private quizQuestions!: QuestionData[];
  constructor(private _formBuilder: FormBuilder, private componentService: componentService,public dialog: MatDialog) {}
  private questionsSub: Subscription = new Subscription();
  ngOnInit() {
    this.quizQuestions = [];
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
        let categories = ["allgemein", "blau", "braun","gelb","glas","schwarz","sondermuell"]
        let counter = 0;
        let tempquestions = [...this.questions]
        this.shuffle(tempquestions)
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
            this.quizQuestions.push(tempquestions[tempQuestion])
            tempquestions.splice(tempQuestion, 1)
          }
        }
        console.log(this.quizQuestions)
      });



      this.firstFormGroup = new FormGroup({
        Q1: new FormControl(null, {validators: [Validators.required] }),
        Q2: new FormControl(null, { validators: [Validators.required] }),
        Q3: new FormControl(null, { validators: [Validators.required] }),
        Q4: new FormControl(null, { validators: [Validators.required] }),
        Q5: new FormControl(null, { validators: [Validators.required] }),
        Q6: new FormControl(null, { validators: [Validators.required] }),
      });

      this.secondFormGroup = new FormGroup({
        Q7: new FormControl(null, {validators: [Validators.required] }),
        Q8: new FormControl(null, { validators: [Validators.required] }),
        Q9: new FormControl(null, { validators: [Validators.required] }),
        Q10: new FormControl(null, { validators: [Validators.required] }),
        Q11: new FormControl(null, { validators: [Validators.required] }),
        Q12: new FormControl(null, { validators: [Validators.required] }),
      });
      this.thirdFormGroup = new FormGroup({
        Q13: new FormControl(null, {validators: [Validators.required] }),
        Q14: new FormControl(null, { validators: [Validators.required] }),
        Q15: new FormControl(null, { validators: [Validators.required] }),
        Q16: new FormControl(null, { validators: [Validators.required] }),
        Q17: new FormControl(null, { validators: [Validators.required] }),
        Q18: new FormControl(null, { validators: [Validators.required] }),
      });
      this.fourthFormGroup = new FormGroup({
        Q19: new FormControl(null, {validators: [Validators.required] }),
        Q20: new FormControl(null, { validators: [Validators.required] }),
        Q21: new FormControl(null, { validators: [Validators.required] }),
        Q22: new FormControl(null, { validators: [Validators.required] }),
        Q23: new FormControl(null, { validators: [Validators.required] }),
        Q24: new FormControl(null, { validators: [Validators.required] }),
      });
      this.fifthFormGroup = new FormGroup({
        Q25: new FormControl(null, {validators: [Validators.required] }),
        Q26: new FormControl(null, { validators: [Validators.required] }),
        Q27: new FormControl(null, { validators: [Validators.required] }),
        Q28: new FormControl(null, { validators: [Validators.required] }),
        Q29: new FormControl(null, { validators: [Validators.required] }),
        Q30: new FormControl(null, { validators: [Validators.required] }),
      });
      this.sixthFormGroup = new FormGroup({
        Q31: new FormControl(null, {validators: [Validators.required] }),
        Q32: new FormControl(null, { validators: [Validators.required] }),
        Q33: new FormControl(null, { validators: [Validators.required] }),
        Q34: new FormControl(null, { validators: [Validators.required] }),
        Q35: new FormControl(null, { validators: [Validators.required] }),
        Q36: new FormControl(null, { validators: [Validators.required] }),
      });
      this.seventhFormGroup = new FormGroup({
        Q37: new FormControl(null, {validators: [Validators.required] }),
        Q38: new FormControl(null, { validators: [Validators.required] }),
        Q39: new FormControl(null, { validators: [Validators.required] }),
        Q40: new FormControl(null, { validators: [Validators.required] }),
        Q41: new FormControl(null, { validators: [Validators.required] }),
        Q42: new FormControl(null, { validators: [Validators.required] }),
      });
  }

  //#region ngOnDestroy
  ngOnDestroy(){
    console.log(this.questions)
  }
  //#endregion

  ngAfterViewInit(){


  }
  onSubmitCategory(formGroup:any , category:any, doIt:any){
    if (this.nextStepWithoutConfirmDialog == true){
      this.nextStepWithoutConfirmDialog = false
      return
    }

    switch (formGroup){
      case "firstFormGroup":
        if(this.firstFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.firstFormGroup.value.Q1,
            this.firstFormGroup.value.Q2,
            this.firstFormGroup.value.Q3,
            this.firstFormGroup.value.Q4,
            this.firstFormGroup.value.Q5,
            this.firstFormGroup.value.Q6,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "secondFormGroup":
        if(this.secondFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.secondFormGroup.value.Q7,
            this.secondFormGroup.value.Q8,
            this.secondFormGroup.value.Q9,
            this.secondFormGroup.value.Q10,
            this.secondFormGroup.value.Q11,
            this.secondFormGroup.value.Q12,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "thirdFormGroup":
        if(this.thirdFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.thirdFormGroup.value.Q13,
            this.thirdFormGroup.value.Q14,
            this.thirdFormGroup.value.Q15,
            this.thirdFormGroup.value.Q16,
            this.thirdFormGroup.value.Q17,
            this.thirdFormGroup.value.Q18,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "fourthFormGroup":
        if(this.fourthFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.fourthFormGroup.value.Q19,
            this.fourthFormGroup.value.Q20,
            this.fourthFormGroup.value.Q21,
            this.fourthFormGroup.value.Q22,
            this.fourthFormGroup.value.Q23,
            this.fourthFormGroup.value.Q24,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "fifthFormGroup":
        if(this.fifthFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.fifthFormGroup.value.Q25,
            this.fifthFormGroup.value.Q26,
            this.fifthFormGroup.value.Q27,
            this.fifthFormGroup.value.Q28,
            this.fifthFormGroup.value.Q29,
            this.fifthFormGroup.value.Q30,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "sixthFormGroup":
        if(this.sixthFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.sixthFormGroup.value.Q31,
            this.sixthFormGroup.value.Q32,
            this.sixthFormGroup.value.Q33,
            this.sixthFormGroup.value.Q34,
            this.sixthFormGroup.value.Q35,
            this.sixthFormGroup.value.Q36,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "seventhFormGroup":
        if(this.seventhFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.seventhFormGroup.value.Q37,
            this.seventhFormGroup.value.Q38,
            this.seventhFormGroup.value.Q39,
            this.seventhFormGroup.value.Q40,
            this.seventhFormGroup.value.Q41,
            this.seventhFormGroup.value.Q42,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
      case "firstFormGroup":
        if(this.firstFormGroup.invalid){
          this.confirmOkDialog("Fehler","Bitte fülle alle Fragen aus.");
        }else{
          let userAnswers = [
            this.firstFormGroup.value.Q1,
            this.firstFormGroup.value.Q2,
            this.firstFormGroup.value.Q3,
            this.firstFormGroup.value.Q4,
            this.firstFormGroup.value.Q5,
            this.firstFormGroup.value.Q6,
          ]
          this.confirmOkDialog("Dein Ergebnis", this.resultBuilderOneCategory(userAnswers, category));
        };
      break;
    }
  }

  resultBuilderOneCategory(userAnswers:any, category:any){
    let messageArray = []
    let message =  ""
    for (let i = 0; i < userAnswers.length; i++){
      if ( userAnswers[i] === this.quizQuestions.filter(elem => elem.QuestionType === category)[i].Answer){
        messageArray.push("Frage " + (i+1) + " war richtig!" )
      }else{
        messageArray.push("Frage " + (i+1) + " war leider Falsch. Die richtige Antwort ist Antwort " + this.quizQuestions.filter(elem => elem.QuestionType === category)[i].Answer[6] + ".")
      }
    }
    for (let i = 0; i < messageArray.length; i++){
      message = message  + messageArray[i] + "\n"
    }
    return message
  }

  goForward(stepper: MatStepper){
    this.nextStepWithoutConfirmDialog = true
    console.log("DBWUHBJDSABUJBJDHU")
    stepper.selectedIndex = stepper.selectedIndex +1
  }
  //Handling des Bestätigungsdialogs
  confirmOkDialog(title: string, message: string) {
    const dialogData = new ConfirmDialogOkModel(title, message);
    let result = false;
    const dialogRef = this.dialog.open(ConfirmDialogOkComponent, {
      maxWidth: '600px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      result = dialogResult;
      if (result) {
      } else {
      }
    });
  }

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
