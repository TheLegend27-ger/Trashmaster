import { Component } from '@angular/core';
import { componentService } from '../componentService.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-data-uploader',
  templateUrl: './data-uploader.component.html',
  styleUrls: ['./data-uploader.component.scss'],
})
export class DataUploaderComponent {
  constructor(
    public componentService: componentService,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) {}
}
