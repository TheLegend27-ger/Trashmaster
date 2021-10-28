import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { QuestionData } from 'src/app/models/question.model';
import { componentService } from '../componentService.service';
import { ConfirmDialogOkComponent, ConfirmDialogOkModel } from '../confirmationdialog/confirm-dialog-ok.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],

})
export class QuizComponent implements OnInit, OnDestroy {
  constructor(public componentService: componentService, public router:Router) { }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

}
