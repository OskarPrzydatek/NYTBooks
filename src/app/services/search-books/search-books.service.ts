import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.api';

@Injectable({
  providedIn: 'root'
})
export class SearchBooksService {
  constructor(private http: HttpClient) { }

  search(target): Observable<any> {
    return this.http.get(environment.searchURL(target));
  }
}
