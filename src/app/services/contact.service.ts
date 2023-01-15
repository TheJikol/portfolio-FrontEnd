import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  url: String = 'https://portfoliobackend-lh3i.onrender.com/api/';
  
  constructor(private http: HttpClient) {}

  viewContact(): Observable<Contact> {
    return this.http.get<Contact>(this.url + 'view/contact/0');
  }

  editContactService(contact: Contact): Observable<any> {
    return this.http.put<any>(this.url + 'edit/contact', contact);
  }
}
