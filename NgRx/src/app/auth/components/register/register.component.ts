import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]}),
    email: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]}),
    password: new FormControl('', {validators: [Validators.required, Validators.required, Validators.minLength(6)]}),

  })

  onSubmit() {
    console.log('form', this.form.getRawValue())
  }
}
