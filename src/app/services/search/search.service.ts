import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  buildTarget(searchTarget: string, searchValue: string): string {
    return `${searchTarget}=${searchValue}`;
  }

  search(target: string): Observable<any> {
    return this.http.get(environment.searchURL(target));
  }
}
