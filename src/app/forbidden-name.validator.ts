import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

// export function forbiddenNameValidator(control: AbstractControl) {
//   const nameRe = /admin/;
//   const name = control.value;
//   const no = nameRe.test(name);
//   return no ? { forbiddenName: true } : null;
// }

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? { forbiddenName: true } : null;
  };
}

export function emailExist(httpClient: HttpClient): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return httpClient.get('/api/email-exist?email=' + control.value);
  };
}
