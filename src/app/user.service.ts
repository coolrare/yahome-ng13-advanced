import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike'),
    lastName: this.formBuilder.control(''),
    password: this.formBuilder.group({
      password: this.formBuilder.control(''),
      repeatPassword: this.formBuilder.control(''),
    }),
    interest: this.formBuilder.array([
      this.formBuilder.control('Angular'),
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
    ]),
  });

  constructor(private formBuilder: FormBuilder) { }

  createUserModel() {
    return this.formBuilder.group({
      firstName: this.formBuilder.control('Mike'),
      lastName: this.formBuilder.control(''),
      password: this.formBuilder.group({
        password: this.formBuilder.control(''),
        repeatPassword: this.formBuilder.control(''),
      }),
      interest: this.formBuilder.array([
        this.formBuilder.control('Angular'),
        this.formBuilder.control('HTML'),
        this.formBuilder.control('CSS'),
      ]),
    });
  }
}
