import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/module/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userArr!: Array<Iuser>;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.userArr = this._userService.fetchalluser();
  }
}
