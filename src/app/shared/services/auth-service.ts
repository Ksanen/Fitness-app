import { Injectable } from '@angular/core';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;

  login(username: string, password: string) {
    const user: User | null = this.getUserFromLocalStorage(username);
    if (user === null) return false;
    if (user.password !== password) return false;
    this.isLogged = true;
    return true;
  }
  logout() {
    this.isLogged = false;
  }
  isAuthenticated(): boolean {
    return this.isLogged;
  }
  getUserFromLocalStorage(username: string) {
    const userData = localStorage.getItem(`userFitness_${username}`);
    if (!userData) return null;
    try {
      const user: User = JSON.parse(userData);
      return user;
    } catch (e) {
      console.log('błąd parsowania JSON: ', e);
      return null;
    }
  }
  saveUserInLocalStorage(username: string, password: string) {
    let user = {
      username: username,
      password: password,
    };
    const userJson = JSON.stringify(user);
    localStorage.setItem(`userFitness_${username}`, userJson);
  }
  register(username: string, password: string) {
    if (this.getUserFromLocalStorage(username) !== null) {
      alert('this user exists');
      return;
    }
    this.saveUserInLocalStorage(username, password);
  }
}
