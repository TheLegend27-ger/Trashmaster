import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { QuestionData }from '../../../models/question.model'
import { componentService } from '../../componentService.service';


@Component({
  selector: 'app-data-uploader-questions-editor',
  templateUrl: './data-uploader-questions-editor.component.html',
  styleUrls: ['./data-uploader-questions-editor.component.scss']
})
export class DataUploaderQuestionsEditorComponent implements OnInit {
  isLoading = false;
  form!: FormGroup;
  imagePreview!: string;
  private mode = "create";
  private questionId: any;
  question: QuestionData={
    id: '',
    Title: '',
    Question: '',
    Answer1: '',
    Answer2: '',
    Answer3: '',
    Answer4: '',
    Answer: '',
    QuestionType: ''
  }

  constructor(
    public componentService: componentService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      Title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Question: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Answer1: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Answer2: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Answer3: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Answer4: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Answer: new FormControl(null, {
        validators: [Validators.required]
      }),
      QuestionType: new FormControl(null, {
        validators: [Validators.required]
      }),

    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("questionId")) {
        this.mode = "edit";
        this.questionId = paramMap.get("questionId");
        this.isLoading = true;
        this.componentService.getSingleQuestion(this.questionId).subscribe(QuestionData => {
          this.isLoading = false;
          this.question = {
            id: QuestionData._id,
            Title: QuestionData.Title,
            Question: QuestionData.Question,
            Answer1: QuestionData.Answer1,
            Answer2: QuestionData.Answer2,
            Answer3: QuestionData.Answer3,
            Answer4: QuestionData.Answer4,
            Answer: QuestionData.Answer,
            QuestionType: QuestionData.QuestionType
          };
          this.form.setValue({
            Title: this.question.Title,
            Question: this.question.Question,
            Answer1: this.question.Answer1,
            Answer2: this.question.Answer2,
            Answer3: this.question.Answer3,
            Answer4: this.question.Answer4,
            Answer: this.question.Answer,
            QuestionType: this.question.QuestionType,
          });
        });
      } else {
        this.mode = "create";
        this.questionId = null;
      }
    });
  }

  onSaveQuestion() {
    if (this.form.invalid) {
      console.log("invalid")
      console.log(document.getElementsByClassName('ng-invalid'))
      return;
    }
    if (this.form.valid) {
      console.log("valid")
    }
    //this.isLoading = true;
    if (this.mode === "create") {
      this.componentService.addQuestion(this.questionBuilder(''));
    } else {
      let questionToSave = this.questionBuilder(this.questionId);
      this.componentService.updateQuestion(questionToSave.id, questionToSave );
    }
    this.form.reset();
  }
  getAnswerOptions(){
    let returnAnswers : Array<string>
    returnAnswers = [this.form.value.Answer1,this.form.value.Answer2,this.form.value.Answer3,this.form.value.Answer4]
    return returnAnswers
  }
  questionBuilder(myID: any){
    let questionToSave: QuestionData = {
      id: myID,
      Title: this.form.value.Title,
      Question: this.form.value.Question,
      Answer1: this.form.value.Answer1,
      Answer2: this.form.value.Answer2,
      Answer3: this.form.value.Answer3,
      Answer4: this.form.value.Answer4,
      Answer: this.form.value.Answer,
      QuestionType: this.form.value.QuestionType,
    }
    return questionToSave
  }
}
