import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL1="http://localhost:8081/user/getAll";
  private baseURL2="http://localhost:8081/user/save";
  private baseURL3="http://localhost:8081/user/update";
  private baseURL4="http://localhost:8081/user/delete";
  private baseURL5="http://localhost:8081/user";

  constructor(private httpClient: HttpClient) { }

  getUsersList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL1}`);
  }

  createUser(user:User):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL2}`,user);
  }
 
  getUserById(user_id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL3}/${user_id}`);
  }

  updateUser(user_id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${user_id}`, user);
  }

  deleteUser(user_id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${user_id}`);
  }

  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.baseURL5}/login`, user);
  }
}
