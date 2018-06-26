import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  register(username : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(response=>console.log(response))
        .catch(err=>console.log(err));
  }

  
  constructor() { }

}
