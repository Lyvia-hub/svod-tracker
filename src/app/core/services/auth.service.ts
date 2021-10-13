import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }

  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  readonly user$: Observable<User | null> = this.user.asObservable();

  login(email: string, password: string): Observable<User | null> {
    const url = `${environment.firebase.auth.baseURL}/verifyPassword?key=
              ${environment.firebase.apiKey}`;

    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<User>(url, data, httpOptions);
  }

  signin(name: string, email: string, password: string): Observable<User | null> {

    const url: string = `${environment.firebase.auth.baseURL}/signupNewUser?key=${environment.firebase.apiKey}`;

    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<User>(url, data, httpOptions);
    // .pipe(
    //   switchMap((data: any) => {
    //     const jwt: string = data.idToken;
    //     const user = new User({
    //       email: email,
    //       id: localId,
    //       name: name
    //     });
    //     return this.userService.save(user, jwt);
    //   }),
    //   tap(user => this.user.next(user))
    // );

  }


  logout(): void {

  }
}
