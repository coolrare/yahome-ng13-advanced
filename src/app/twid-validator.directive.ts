import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

// <input ngModel twid required />

export const twidValidator = (params: any) => {
  return (control: AbstractControl) => {
    return control.value.length === 10 ? null : { twid: true };
  }
}


@Directive({
  selector: '[twid][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TwidValidatorDirective, multi: true }
  ]
})

export class TwidValidatorDirective implements Validator {

  @Input('twid') twid = 0;

  validate(c: AbstractControl): ValidationErrors | null {
    return twidValidator(this.twid)(c);
  }
}
