import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public users$ = new BehaviorSubject<Array<{id:number,email:string, password:string}>>([
    {id:1, email: 'cece@gmail.com', password: 'test' },
    {id:2, email: 'toto@gmail.com', password: 'toto' },
    {id:3, email: 'kevin@gmail.com', password: 'kevin' },
    {id:4, email: 'lara@gmail.com', password: 'lara' },
  ]);

  public getUsers() {
    return this.users$;
  }
  public updateUsers(users: Array<{id:number,email:string, password:string}>) {
    this.users$.next(users);
  }
}
