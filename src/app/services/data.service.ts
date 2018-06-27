import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/user-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class DataService{
    counter = 0;
    getUserData(){
        return USER_DATA;
    }
    getHttpData(){
     return this.http.get("https://sg4-demo.firebaseio.com/userdata.json")
            .map(response=><User[]>response.json())
            
    }
    getHttpClientData(){
       return this.httpClient.get<User[]>("https://sg4-demo.firebaseio.com/userdata.json");
        // this.httpClient.get("https://sg4-demo.firebaseio.com/userdata.json",{
        //     params : new HttpParams().set('auth', this.authService.getToken())
        // })
    }
    constructor(private http : Http,
                private httpClient : HttpClient,
                private authService : AuthService){}
}

