import { AbstractControl } from '@angular/forms';

export const repeatPasswordValidator = (
  passwordName: string,
  repeatPasswordName: string
) => {
  return (control: AbstractControl) => {
    if (
      control.get(passwordName)?.value ===
      control.get(repeatPasswordName)?.value
    ) {
      return null;
    }

    return { repeatPassword: true };
  };
};
