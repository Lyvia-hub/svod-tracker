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


  // save(user: User, jwt: string): Observable<User | null> {
  //   const url =
  //     `${environment.firebase.firestore.baseURL}/users?key=
  //   ${environment.firebase.apiKey}&documentId=${user.id}`;

  //   const data = this.getDataForFirestore(user);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${jwt}`
  //     })
  //   };

  //   return this.http.post(url, data, httpOptions).pipe(
  //     switchMap((data: any) => {
  //       return of(this.getUserFromFirestore(data.fields));
  //     })
  //   );
  // }

  // getUserFromFirestore(fields: any): User {
  //   return new User({
  //     id: 'dghtestyrjyt',
  //     email: 'fgturytui',
  //     name: 'fields.name.stringValue',
  //     avatar: 'fields.avatar.stringValue'
  //   });
  // }

  // getDataForFirestore(user: User): Object {
  //   return {
  //     fields: {
  //       id: { stringValue: user.id },
  //       email: { stringValue: user.email },
  //       name: { stringValue: user.name },
  //       avatar: { stringValue: user.avatar }
  //     }
  //   };
  // }
}
