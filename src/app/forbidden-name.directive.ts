import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.validator';
// <input ngModel [forbiddenName]="/Will/">
@Directive({
  selector: '[forbiddenName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }
  ]
})
export class ForbiddenNameDirective implements Validator {

  @Input() forbiddenName?: RegExp;

  validate(control: AbstractControl): ValidationErrors | null {
    if(!this.forbiddenName) {
      return null;
    }

    return forbiddenNameValidator(this.forbiddenName)(control);
  }
}
