import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2: string, password: string) {
    if (username2 == "12345" && password == "54321") {
      sessionStorage.setItem('username', username2);
      return true;
    } 
    else {
      return false;
    }
  }
}
