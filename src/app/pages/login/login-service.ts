import { Injectable } from '@angular/core';
import User from '../../shared/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  getUserFromLocalStorage(username: string, password: string) {
    let user: User | null = JSON.parse(
      JSON.stringify(localStorage.getItem('userFitness'))
    );
    if (!user) return null;
    return user;
  }
}
