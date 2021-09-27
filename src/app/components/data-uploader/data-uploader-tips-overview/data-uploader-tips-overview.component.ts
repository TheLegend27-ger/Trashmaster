import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  NgModule,
} from '@angular/core';
import { TipData } from 'src/app/models/tip.model';
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
  selector: 'app-data-uploader-tips-overview',
  templateUrl: './data-uploader-tips-overview.component.html',
  styleUrls: ['./data-uploader-tips-overview.component.scss'],
})
export class DataUploaderTipsOverviewComponent implements OnInit, OnDestroy {
  constructor(
    public componentService: componentService,
    public dialog: MatDialog
  ) {}
  @Input() tips: TipData[] = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Title',
    'Text',
    'ImageNumber',
    'Delete',
    'Edit',
  ];

  dataSource!: MatTableDataSource<TipData>;
  private tipsSub: Subscription = new Subscription();
  isLoading = true;

  ngOnInit(): void {
    this.componentService.getTips();
    this.tipsSub = this.componentService
      .getTipsUpdateListener()
      .subscribe((tips: TipData[]) => {
        this.tips = tips;
        this.dataSource = new MatTableDataSource(this.tips);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          this.isLoading = false;
        }, 1);
      });
  }
  ngOnDestroy(): void {
    this.isLoading = true;
    this.tipsSub.unsubscribe();
  }
  onDelete(tipId: any) {
    this.componentService.deletetip(tipId);
  }
  onOpenEditForm(tip: TipData) {
    console.log(tip);
  }
  openConfirmDialog(tipId: any) {

    const title = 'Confirm deletion progress';
    const message =
      'Are you sure you want to delete ?';
    this.confirmDeleteDialog(title, message, tipId);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  confirmDeleteDialog(title: string, message: string, tipId: any) {
    const dialogData = new ConfirmDialogModel(title, message);
    let result = false;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      result = dialogResult;
      if (result) {
        this.onDelete(tipId);
      } else {
      }
    });
  }
}
