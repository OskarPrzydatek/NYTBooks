import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.api';

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {
  constructor(private http: HttpClient) { }

  getBestsellersData(): Observable<any> {
    return this.http.get(environment.bestsellersURL());
  }

  rankStyle(condition: number, rankColors: any): string {
    if (condition > 0) {
      return `${rankColors.up}`;
    }

    return (condition < 0) ? `${rankColors.down}` : `${rankColors.stay}`;
  }
}
