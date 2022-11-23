import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-customised-confirm-dialog',
  templateUrl: './mat-customised-confirm-dialog.component.html',
  styleUrls: ['./mat-customised-confirm-dialog.component.css']
})
export class MatCustomisedConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,
  public dialogRef: MatDialogRef<MatCustomisedConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
