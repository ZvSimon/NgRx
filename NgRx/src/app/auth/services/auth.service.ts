import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {CurrentUserInterface} from "../shared/types/currentUser.interface";
import {map, Observable} from "rxjs";
import {AuthResponseInterface} from "../types/authResponse.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/users'
    console.log(url)
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user))
  }
}
