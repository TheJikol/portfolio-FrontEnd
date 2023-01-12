import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url:String = "http://localhost:8080/api/";
  constructor(private http:HttpClient) {
  }

  createEducation(education:Education){
    return this.http.post<any>(this.url + "create/education", education);
  }

  viewEducation():Observable<Education[]>{
    return this.http.get<Education[]>(this.url + "view/education");
  }

  deleteEducation(id:number){
    return this.http.delete<any>(this.url + "delete/education/" + id);
  }

  editEducation(education:Education, id:number){
    console.log(education)
    return this.http.put<any>(this.url + "edit/education/" + id, education)
  }

}
