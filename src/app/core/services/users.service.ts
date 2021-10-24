import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  save(user: User, jwt: string): Observable<User | null> {
    const url =
      `${environment.firebase.firestore.baseURL}/users?key=
    ${environment.firebase.apiKey}&documentId=${user.id}`;

    const data = this.getDataForFirestore(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      })
    };

    return this.http.post(url, data, httpOptions).pipe(
      switchMap((data: any) => {
        return of(this.getUserFromFirestore(data.fields));
      })
    );
  }

  get(userId: string, jwt: string): Observable<User | null> {

    const url = `${environment.firebase.firestore.baseURL}:runQuery?key=${environment.firebase.apiKey}`;

    const data = this.getStructuredQuery(userId);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      })
    };
    return this.http.post(url, data, httpOptions).pipe(
      switchMap((data: any) => {
        return of(this.getUserFromFirestore(data[0].document.fields));
      })
    );
  }

  private getUserFromFirestore(fields: any): User {
    return new User({
      id: fields.id.stringValue,
      name: fields.name.stringValue,
      email: fields.email.stringValue,
      avatar: fields.avatar.stringValue
    });
  }

  getDataForFirestore(user: User): Object {
    return {
      fields: {
        id: { stringValue: user.id },
        name: { stringValue: user.name },
        email: { stringValue: user.email },
        avatar: { stringValue: user.avatar }
      }
    };
  }

  private getStructuredQuery(userId: string): Object {
    return {
      'structuredQuery': {
        'from': [{
          'collectionId': 'users'
        }],
        'where': {
          'fieldFilter': {
            'field': { 'fieldPath': 'id' },
            'op': 'EQUAL',
            'value': { 'stringValue': userId }
          }
        },
        'limit': 1
      }
    };
  }
}
