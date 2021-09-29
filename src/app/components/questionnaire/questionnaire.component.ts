import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit, OnDestroy {

  options!: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(public componentService: componentService, fb: FormBuilder) {

    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

  }

  //#region ngOnInit
  ngOnInit(): void {



  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){

    let test = this.floatLabelControl.value

    console.log(test)

  }
  //#endregion

}
