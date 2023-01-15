import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biography } from '../models/Biography';

@Injectable({
  providedIn: 'root',
})
export class BiographyService {

  url: String = 'https://portfoliobackend-lh3i.onrender.com/api/';
  
  constructor(private http: HttpClient) {}

  viewBiography(): Observable<Biography> {
    return this.http.get<Biography>(this.url + 'view/biography/0');
  }

  editBiographyService(biography: Biography): Observable<any> {
    return this.http.put<any>(this.url + 'edit/biography', biography);
  }
}
