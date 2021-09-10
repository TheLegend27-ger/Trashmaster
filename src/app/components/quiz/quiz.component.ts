import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {

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
