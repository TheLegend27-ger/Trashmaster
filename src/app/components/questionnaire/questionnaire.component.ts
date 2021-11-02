import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';





@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  floatLabelControl = new FormControl();
  constructor(private componentService: componentService,) {

  }

  //#region ngOnInit
  ngOnInit(): void {
    /*
    this.form = new FormGroup({
      Plastic: new FormControl(null, {validators: [Validators.required] }),
      Fabric: new FormControl(null, { validators: [Validators.required] }),
      Metal: new FormControl(null, { validators: [Validators.required] }),
      Organic: new FormControl(null, { validators: [Validators.required] }),
      Eatable: new FormControl(null, { validators: [Validators.required] }),
      Arms: new FormControl(null, { validators: [Validators.required] }),
    });
    */
  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){
    //let test = this.floatLabelControl.value
    //console.log(test)
  }
  //#endregion
  onCheckQuestionnaire(){
    if (this.form.invalid) {
      console.log("invalid")
      //console.log(document.getElementsByClassName('ng-invalid'))
      //for (let i = 0; i < document.getElementsByClassName('ng-invalid').length; i++){
      //  document.getElementsByClassName('ng-invalid').item(i)?.classList.add('invalid')
      //}
      return;
    }
    if (this.form.valid) {
      console.log("valid")
      let myFormAnswsers = [
        this.form.value.Plastic,
        this.form.value.Fabric,
        this.form.value.Metal,
        this.form.value.Organic,
        this.form.value.Eatable,
        this.form.value.Arms]
      this.componentService.findQuestionnaireAnswer(myFormAnswsers);
    }
  }
}
