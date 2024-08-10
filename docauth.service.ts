import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticates(username:string, password:string){
    if(username=="Ravindra" && password=="Rvd@1234"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false;
    }
  }
}
