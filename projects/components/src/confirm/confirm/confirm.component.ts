import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'emr-confirm',
  exportAs: 'emrConfirm',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDialogClose
  ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
  host: {
    'class': 'emr-confirm'
  }
})
export class ConfirmComponent {
  private _data = inject(DIALOG_DATA);
  private _dialogRef = inject(DialogRef);

  title = this._data.title;
  description = this._data.description;
}
