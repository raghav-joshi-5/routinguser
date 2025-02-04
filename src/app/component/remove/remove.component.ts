import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  constructor(private _matDialogRef: MatDialogRef<RemoveComponent>) {}

  ngOnInit(): void {}
  onConfirm(arg0: boolean) {
    this._matDialogRef.close(arg0);
  }
}
