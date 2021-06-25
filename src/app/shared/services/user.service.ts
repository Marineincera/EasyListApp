import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  anonymousUser = {pseudo: "anonymous user", email:"", password:""};
  protected authenticatedUser: BehaviorSubject<User> = new BehaviorSubject<User>(this.anonymousUser);

  constructor() { }

  login(pseudo: string, email: string, password:string): Observable<User>{
    const newUser: User = {
      pseudo: pseudo,
      email: email,
      password: password
    }
    this.authenticatedUser.next(newUser)
    return this.authenticatedUser;
  }
  
  public getAuthenticatedUser(): Observable<User> {
  return this.authenticatedUser;
  }

}
