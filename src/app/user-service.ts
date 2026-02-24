import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private apiUrl = "https://jsonplaceholder.typicode.com/users";
  private apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
