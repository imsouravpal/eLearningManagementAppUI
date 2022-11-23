import { Injectable } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatCustomisedConfirmDialogComponent } from '../mat-customised-confirm-dialog/mat-customised-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CustomisedconfirmdialogService {

  constructor(private dialog : MatDialog) { }

  openConfirmDialog(msg : string) {
    return this.dialog.open(MatCustomisedConfirmDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top: "10px"},
      data : {
        message : msg
      }
    });
  }
}
