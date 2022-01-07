import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
  FormControl,
} from '@angular/forms';
import { twidValidator } from './twid-validator.directive';

export function forbiddenNameValidator(control: AbstractControl) {
  const nameRe = /Will/;
  const name = control.value;
  const no = nameRe.test(name);
  return no ? { forbiddenName: true } : null;
}

export function forbiddenNameValidator2(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? { forbiddenName: true } : null;
  };
}

const forbiddenName_Mike = forbiddenNameValidator2(/Mike/);
const forbiddenName_Admin = forbiddenNameValidator2(/Admin/);
const forbiddenName_Will = forbiddenNameValidator2(/Will/);

const control = new FormControl('', [
  forbiddenName_Mike,
  forbiddenName_Admin,
  forbiddenName_Will,
  twidValidator(10)
]);

@Injectable({
  providedIn: 'root',
})
export class UserService {
  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: this.formBuilder.control(
      {
        value: '',
        disabled: true,
      },
      Validators.required
    ),
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

  constructor(private formBuilder: FormBuilder) {}

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
