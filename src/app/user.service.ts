import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailExist, forbiddenNameValidator } from './forbidden-name.validator';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  email = this.formBuilder.control('', [], emailExist(this.httpClient));

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/admin/)
    ]),
    lastName: this.formBuilder.control({
      value: '',
      disabled: true
    }, Validators.required),
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

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

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
