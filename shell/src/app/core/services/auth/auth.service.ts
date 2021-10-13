import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean;

  constructor() {
    this.isLogged = Boolean(localStorage.getItem('token'));
  }
}
