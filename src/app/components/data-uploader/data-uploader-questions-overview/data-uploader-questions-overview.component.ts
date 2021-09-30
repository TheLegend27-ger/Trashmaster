import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  NgModule,
} from '@angular/core';
import { QuestionData } from 'src/app/models/question.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from '../../confirmationdialog/confirm-dialog.component';
import { componentService } from '../../componentService.service';

@Component({
  selector: 'app-data-uploader-questions-overview',
  templateUrl: './data-uploader-questions-overview.component.html',
  styleUrls: ['./data-uploader-questions-overview.component.scss']
})
export class DataUploaderQuestionsOverviewComponent implements OnInit, OnDestroy {
  constructor(
    public componentService: componentService,
    public dialog: MatDialog
  ) {}
  @Input() questions: QuestionData[] = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Title',
    'Question',
    'Answer1',
    'Answer2',
    'Answer3',
    'Answer4',
    'Answer',
    'QuestionType',
    'Delete',
    'Edit',
  ];

  dataSource!: MatTableDataSource<QuestionData>;
  private questionsSub: Subscription = new Subscription();
  isLoading = true;

  ngOnInit(): void {
    this.componentService.getQuestions();
    this.questionsSub = this.componentService
      .getQuestionsUpdateListener()
      .subscribe((questions: QuestionData[]) => {
        this.questions = questions;
        this.dataSource = new MatTableDataSource(this.questions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          this.isLoading = false;
        }, 1);
      });
  }


  ngOnDestroy(): void {
    this.isLoading = true;
    this.questionsSub.unsubscribe();
  }
  onDelete(Id: any) {
    this.componentService.deletequestion(Id);
  }
  onOpenEditForm(question: QuestionData) {
    console.log(question);
  }
  openConfirmDialog(Id: any) {

    const title = 'Confirm deletion progress';
    const message =
      'Are you sure you want to delete ?';
    this.confirmDeleteDialog(title, message, Id);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  confirmDeleteDialog(title: string, message: string, Id: any) {
    const dialogData = new ConfirmDialogModel(title, message);
    let result = false;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      result = dialogResult;
      if (result) {
        this.onDelete(Id);
      } else {
      }
    });
  }
}
