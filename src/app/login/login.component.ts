import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('tUsername') username?: NgModel;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.username?.value);
    setTimeout(() => {
      this.username?.control.setValue('mike@miniasp.com');
    }, 0);
  }

  login(username: string, password: string) {
    return;

    console.log(username, password);
    localStorage.setItem('token', 'xxx');
    this.router.navigateByUrl('/');
  }
}
