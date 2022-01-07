import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    console.log(username, password);
    localStorage.setItem('token', 'xxx');
    this.router.navigateByUrl('/');
  }

}
