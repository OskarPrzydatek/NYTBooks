import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.api';


@Injectable({
  providedIn: 'root'
})
export class BestsellersListService {
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(environment.bestsellersURL());
  }
}
