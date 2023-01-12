import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url:String = "http://localhost:8080/api/";
  constructor(private http:HttpClient) {
  }

  createProject(project:Project){
    return this.http.post<any>(this.url + "create/project", project);
  }

  viewProject():Observable<Project[]>{
    return this.http.get<Project[]>(this.url + "view/project");
  }

  deleteProject(id:number){
    return this.http.delete<any>(this.url + "delete/project/" + id);
  }

  editProject(project:Project, id:number){
    console.log(project)
    return this.http.put<any>(this.url + "edit/project/" + id, project)
  }

}
