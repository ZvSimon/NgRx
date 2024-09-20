import {Component, inject} from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {register} from "../../store/action";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";
import {selectIsSubmitting} from "../../store/selectors";
import {AuthStateInterface} from "../../types/authState.interface";
import {AsyncPipe} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,AsyncPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  store:Store<{auth:AuthStateInterface}> = inject(Store)
    form = new FormGroup({
      username: new FormControl('', {validators: [Validators.required], nonNullable: true}),
      email: new FormControl('', {validators: [Validators.required],nonNullable: true}),
      password: new FormControl('', {validators: [Validators.required],nonNullable: true}),
    })


  isSubmitting$ = this.store.select(selectIsSubmitting)


  onSubmit() {
    console.log('form', this.form.getRawValue())

    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({request}))

  }
}
