import { UserService } from './../user.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { repeatPasswordValidator } from '../repeat-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = this.userService.form;

  get interestControlArray(): FormArray {
    return this.form.get('interest') as FormArray;
  }

  get interestControls(): FormControl[] {
    return (this.form.get('interest') as FormArray).controls as FormControl[];
  }

  // constructor(private formBuilder: FormBuilder) {}
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form.addValidators([
      repeatPasswordValidator('password.password', 'password.repeatPassword'),
    ]);

    // this.form.get('firstName')?.disable();
    this.form.addControl(
      'email',
      this.formBuilder.control('', [Validators.required, Validators.email])
    );
  }

  remove(index: number) {
    this.interestControlArray.removeAt(index);
  }

  add() {
    this.interestControlArray.push(this.formBuilder.control(''));
  }
}
