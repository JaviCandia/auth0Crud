import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://login-app-afb94-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  createUser( user: UserModel) {
    return this.http.post(`${this.url}/users.json`, user)
      .pipe(
        map( (resp: any) => {
          user.id = resp.name;
          return user;
        })
      );
  }

  updateUser(user: UserModel){
    const userTemp = {
      ...user
    }
    delete userTemp.id;

    return this.http.put(`${this.url}/users/${user.id}.json`, userTemp);
  }
}
