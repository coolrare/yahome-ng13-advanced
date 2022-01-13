import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
