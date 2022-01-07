import { HttpClient } from '@angular/common/http';
import { filter, switchMap } from 'rxjs/operators';
import { combineLatest, from, of } from 'rxjs';
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
  usernameExist = false;

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.username?.value);
    setTimeout(() => {
      this.username?.control.setValue('mike@miniasp.com');
    }, 0);

    this.username?.valueChanges?.subscribe((data) => {
      console.log(`username: ${data}`);
    });

    this.username?.statusChanges?.subscribe((status) => {
      console.log(`username status: ${status}`);
    });

    const checkExist = (email: string) => of(true);

    if (
      this.username &&
      this.username.valueChanges &&
      this.username.statusChanges
    ) {
      combineLatest([
        from(this.username.valueChanges),
        from(this.username.statusChanges),
      ])
      .pipe(
        filter(([username, status]) => status === 'VALID'),
        switchMap(([username, status]) => checkExist(username)),
      )
      .subscribe(exist => {
        // console.log(username, status);
        // this.usernameExist = exist;
        // this.username?.control.setErrors({ usernameExist: true })
      });
    }
  }

  login(username: string, password: string, formValue: any) {
    console.log(username, password, formValue);
    localStorage.setItem('token', 'xxx');
    this.router.navigateByUrl('/');
  }
}
