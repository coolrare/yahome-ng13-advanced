import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form = this.userService.createUserModel();

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.form.removeControl('password');

  }

}
