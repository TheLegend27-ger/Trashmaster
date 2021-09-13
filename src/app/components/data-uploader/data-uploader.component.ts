import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';
import { MaterialModule } from 'src/app/material.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TipData } from 'src/app/models/tip.model';
import { QuestionData } from 'src/app/models/question.model';
import { NgForm } from '@angular/forms';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirmationdialog/confirm-dialog.component';


@Component({
  selector: 'app-data-uploader',
  templateUrl: './data-uploader.component.html',
  styleUrls: ['./data-uploader.component.scss']
})
export class DataUploaderComponent implements OnInit, OnDestroy {

  constructor(public componentService: componentService, public route: ActivatedRoute, public dialog: MatDialog) { }

  tip: TipData = {
    id: '',
    Title: '',
    Text: '',
    ImageNumber: 0
  }
  question: QuestionData = {
    id: '',
    Title: '',
    Question: '',
    AnswerOptions: [],
    Answer: ''
  }


  mode = 'create'
  isLoading = true
  private tipId: any;
  private imageId: any;
  private questionId: any;

  //#region ngOnInit
  ngOnInit(): void {


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('tipId')){
        this.mode= 'edit';
        this.tipId = paramMap.get('tipId');
        //this.tip = this.componentService.getSingleTip(this.tipId)
      } else if (paramMap.has('imageId')){
        this.mode= 'edit';
        this.tipId = paramMap.get('imageId');
        //this.tip = this.componentService.getSingleImage(this.imageId)
      }  else if (paramMap.has('questionId')){
        this.mode= 'edit';
        this.tipId = paramMap.get('questionId');
        //this.tip = this.componentService.getSinglequestion(this.questionId)
      } else {
        //this.tip
        this.mode = 'create'
        this.tipId = null;
        this.imageId = null;
        this.questionId = null;
     }
    });
  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){
    this.isLoading = true;
  }
  //#endregion


  openConfirmDialog(form: NgForm){
    if(form.invalid){
      const title = "Attention"
      const message = "Please fill out all neccessary fields";
      this.confirmDialog(title, message, form)
    }else{
      if(this.mode === 'create'){
        const title = "Confirm progress"
        const message = "Are you sure you want to Add a clinic?";
        this.confirmDialog(title, message, form)
      } else {
        const title = "Confirm progress"
        const message = "Are you sure you want to Update?";
        this.confirmDialog(title, message, form)
      }
    }
  }
  confirmDialog(title:string, message: string, form:NgForm){
    const dialogData = new ConfirmDialogModel(title, message);
    let result = false
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      result = dialogResult;
      if(result){
          //this.onSaveClinic(form);
      }else{

      }
    });
  }
}
