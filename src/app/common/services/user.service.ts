import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServerResponse } from '../interfaces/IServerResponse';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
    console.log('UserService');
   }

  getAll(): Observable<IServerResponse<Array<IUser>>> {
    const requestPath = `api/users`;
    return this.http.get<IServerResponse<Array<IUser>>>(requestPath);
  }
}
