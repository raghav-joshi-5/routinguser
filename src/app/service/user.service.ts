import { Injectable } from '@angular/core';
import { Iuser } from '../module/user';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _router: Router, private _snackbar: SnackbarService) {}

  userArr: Array<Iuser> = [
    {
      userName: 'jhon',
      userId: '123',
      userRole: 'candidate',
      userImg: `https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg`,
    },
    {
      userName: 'may',
      userId: '124',
      userRole: 'admin',
      userImg: `https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png`,
    },
    {
      userName: 'june',
      userId: '125',
      userRole: 'candidate',
      userImg: `https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png`,
    },
    {
      userName: 'jane',
      userId: '126',
      userRole: 'admin',
      userImg: `https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png`,
    },
  ];

  fetchalluser() {
    return this.userArr;
  }

  getuserDetails(userId: string): Iuser {
    // to get the user object
    return this.userArr.find((getObj) => getObj.userId === userId)!;
  }

  addUser(userObj: Iuser) {
    this.userArr.push(userObj);
    this._router.navigate(['/user']);
    this._snackbar.openSnackBar(
      `the user ${userObj.userName} is added successfull`
    );
  }

  updateUser(userObj: Iuser) {
    let getIndex = this.userArr.findIndex(
      (getIndex) => getIndex.userId == userObj.userId
    );
    this.userArr[getIndex] = userObj;

    this._router.navigate(['/user']);
    this._snackbar.openSnackBar(
      `the user ${userObj.userName} is updated successfull`
    );
  }

  removeUser(userObj: Iuser) {
    let getIndex = this.userArr.findIndex(
      (getIndex) => getIndex.userId == userObj.userId
    );
    this.userArr.splice(getIndex, 1);
    this._router.navigate(['/user']);
    this._snackbar.openSnackBar(
      `the user ${userObj.userName} is removed successfull`
    );
  }
}
