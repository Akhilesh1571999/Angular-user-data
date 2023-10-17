import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL1="http://localhost:8080/user/getAll";
  private baseURL2="http://localhost:8080/user/save";

  constructor(private httpClient: HttpClient) { }

  getUsersList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL1}`);
  }

  createUser(user:User):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL2}`,user);
  }
}
