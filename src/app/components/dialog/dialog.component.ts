import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, isConfirm?: boolean, header?: string }
  ) { }

  ngOnInit(): void {
    if (this.data.isConfirm === false) {
      setTimeout(() => {
        this.dialogRef.close(false);
      }, 2000);
    }
  }
}
