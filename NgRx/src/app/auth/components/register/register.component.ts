import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {register} from "../../store/action";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  store: Store
  form: FormGroup

  constructor() {
    this.store = inject(Store)
    this.form = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required]}),
    })
  }

  onSubmit() {
    console.log('form', this.form.getRawValue())
    if (this.form.invalid) {
      return
    }
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({request}))
  }
}
