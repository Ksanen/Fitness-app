import { Injectable } from '@angular/core';
import User from '../../shared/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  register(username: string, password: string) {
    if (!this.checkIfUserExists()) return;
    this.saveUserInLocalStorage(username, password);
  }
  checkIfUserExists(): boolean {
    let user: User | null = JSON.parse(
      JSON.stringify(localStorage.getItem('userFitness'))
    );
    if (!user) return false;
    return true;
  }
  saveUserInLocalStorage(username: string, password: string) {
    let user = {
      username: username,
      password: password,
    };
    const userJson = JSON.stringify(user);
    localStorage.setItem('userFitness', userJson);
  }
}
