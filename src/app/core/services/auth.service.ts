import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, delay, finalize, switchMap, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user';
import { UsersService } from './users.service';
import { ErrorService } from './error.service';
import { LoaderService } from './loader.service';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private usersService: UsersService,
    private errorService: ErrorService,
    private loaderService: LoaderService,
    private toastrService: ToastrService) { }

  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  readonly user$: Observable<User | null> = this.user.asObservable();

  login(email: string, password: string): Observable<User | null> {
    const url = `${environment.firebase.auth.baseURL}/verifyPassword?key=${environment.firebase.apiKey}`;

    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.loaderService.setLoading(true);

    return this.http.post<User>(url, data, httpOptions).pipe(
      switchMap((data: any) => {
        const userId: string = data.localId;
        const jwt: string = data.idToken;
        this.saveAuthData(userId, jwt);
        return this.usersService.get(userId, jwt);
      }),
      tap(user => this.user.next(user)),
      tap(_ => this.logoutTimer(3600)),
      catchError(error => this.errorService.handleError(error)),
      finalize(() => this.loaderService.setLoading(false))
    );
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

    this.loaderService.setLoading(true);

    return this.http.post<User>(url, data, httpOptions)
      .pipe(
        switchMap((data: any) => {
          const jwt: string = data.idToken;
          const user = new User({
            email: data.email,
            id: data.localId,
            name: name
          });
          this.saveAuthData(data.localId, jwt);
          return this.usersService.save(user, jwt);
        }),
        tap(user => this.user.next(user)),
        tap(_ => this.logoutTimer(3600)),
        catchError(error => this.errorService.handleError(error)),
        finalize(() => this.loaderService.setLoading(false))
      );
  }

  logout(): void {
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.user.next(null);
    this.router.navigate(['/home']);
  }

  autoLogin(user: User) {
    this.user.next(user);
    this.router.navigate(['user/dashboard']);
  }

  updateUserState(user: User): Observable<User | null> {
    this.loaderService.setLoading(true);
    return this.usersService.update(user).pipe(
      tap(user => this.user.next(user)),
      tap(_ => this.toastrService.showToastr({
        category: 'success',
        message: 'Vos informations ont ??t?? mises ?? jour !'
      })),
      catchError(error => this.errorService.handleError(error)),
      finalize(() => this.loaderService.setLoading(false))
    );
  }

  get currentUser(): User | null {
    return this.user.getValue();
  }

  private logoutTimer(expirationTime: number): void {
    of(true).pipe(
      delay(expirationTime * 1000)
    ).subscribe(_ => this.logout());
  }

  private saveAuthData(userId: string, token: string) {
    const now = new Date();
    const expirationDate = (now.getTime() + 3600 * 1000).toString();
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

}
