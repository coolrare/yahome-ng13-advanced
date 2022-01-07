import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

export function forbiddenNameValidator(control: AbstractControl) {
  const nameRe = /Will/;
  const name = control.value;
  const no = nameRe.test(name);
  return no ? { 'forbiddenName': true } : null;
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike', [
      Validators.required,
      Validators.minLength(4),
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

  constructor(private formBuilder: FormBuilder) { }

  createUserModel() {
    return this.formBuilder.group({
      firstName: this.formBuilder.control('Mike', forbiddenNameValidator),
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
