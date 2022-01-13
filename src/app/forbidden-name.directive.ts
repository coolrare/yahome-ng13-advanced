import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.validator';

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

    if (forbiddenNameValidator(this.forbiddenName)(control)) {
      return null;
    }

    return {
      forbiddenName: true
    };
  }
}
