import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;

  constructor() {
    this.isLogged = Boolean(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    dispatchEvent(new CustomEvent('app-event-bus', {
      bubbles: true,
      detail: {
        eventType: 'auth-register'
      }
    }));
    this.isLogged = false;
  }
}
