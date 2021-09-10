import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit, OnDestroy {

  constructor(public componentService: componentService) { }

  //#region ngOnInit
  ngOnInit(): void {
  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){

  }
  //#endregion

}
