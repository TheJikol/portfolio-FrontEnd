import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url:String = "http://localhost:8080/api/";
  constructor(private http:HttpClient) {
  }

  createExperience(experience:Experience){
    return this.http.post<any>(this.url + "create/experience", experience);
  }

  viewExperience():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url + "view/experience");
  }

  deleteExperience(id:number){
    return this.http.delete<any>(this.url + "delete/experience/" + id);
  }

  editExperience(experience:Experience, id:number){
    console.log(experience)
    return this.http.put<any>(this.url + "edit/experience/" + id, experience)
  }

}
