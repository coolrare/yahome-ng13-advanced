import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike'),
    lastName: this.formBuilder.control('')
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
