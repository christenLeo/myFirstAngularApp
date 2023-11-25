import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getAllUsers(): Observable<User[]> {
    return of([
      new User('Leona', 26),
      new User('Isa', 26),
      new User('Caê', 4),
      new User('Hórus', 3),
    ]);
  }
}
