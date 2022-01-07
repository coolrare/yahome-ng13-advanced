import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = this.formBuilder.group({
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

  get interestControlArray(): FormArray {
    return this.form.get('interest') as FormArray;
  }

  get interestControls(): FormControl[] {
    return (this.form.get('interest') as FormArray).controls as FormControl[];
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form.addControl('email', this.formBuilder.control(''));
  }

  remove(index: number) {
    this.interestControlArray.removeAt(index);
  }

  add() {
    this.interestControlArray.push(this.formBuilder.control(''));
  }
}
