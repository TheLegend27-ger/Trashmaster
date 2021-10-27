import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog-ok',
  templateUrl: './confirm-dialog-ok.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogOkComponent implements OnInit {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogOkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogOkModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogOkModel {
  constructor(public title: string, public message: string) {
  }
}
