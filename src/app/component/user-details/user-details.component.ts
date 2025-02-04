import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/module/user';
import { UserService } from 'src/app/service/user.service';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userId!: string;
  userObj!: Iuser;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['userID'];
    this.userObj = this._userService.getuserDetails(this.userId);
  }

  onRemove() {
    let matDialogRef = this._matdialog.open(RemoveComponent);
    matDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._userService.removeUser(this.userObj);
      }
    });
  }
}
