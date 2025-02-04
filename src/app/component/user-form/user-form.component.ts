import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/module/user';
import { UserService } from 'src/app/service/user.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  isEditmode: boolean = false;
  userForm!: FormGroup;
  userId!: string;
  mode: string = 'create';
  userObj!: Iuser;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _uuid: UuidService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.editMode();
  }
  createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userRole: new FormControl('', Validators.required),
      userImg: new FormControl('', Validators.required),
    });
  }

  get fun() {
    return this.userForm.controls;
  }

  // getuserForm() {
  //   return this.userForm.get('userName') as FormControl;
  // }

  editMode() {
    this.userId = this._route.snapshot.params['userID'];
    if (this.userId) {
      this.isEditmode = true;
      this.mode = 'edit';

      this.userObj = this._userService.getuserDetails(this.userId);
      this.userForm.patchValue(this.userObj);
    } else {
      this.isEditmode = false;
      this.mode = 'create';
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.mode == 'create') {
        let newuserObj = {
          ...this.userForm.value,
          userId: this._uuid.uuid(),
        };
        this._userService.addUser(newuserObj);
        this.userForm.reset();
      } else if (this.mode == 'edit') {
        let newuserupdateObj = {
          ...this.userForm.value,
          userId: this.userId,
        };
        this._userService.updateUser(newuserupdateObj);
        this.userForm.reset();
      }
    }
  }
}
