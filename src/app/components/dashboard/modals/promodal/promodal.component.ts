import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-promodal',
  templateUrl: './promodal.component.html',
  styleUrls: ['./promodal.component.css']
})
export class PromodalComponent {
  form:FormGroup;
  projects:any;
  editId:number = -1;
  projectToEdit:Project = new Project("","","")
  constructor(private formBuilder:FormBuilder, private ProjectData:ProjectService){


    this.form = this.formBuilder.group(
      {
        content:["", [Validators.required]],
        image:["", [Validators.required]],
        link:["", [Validators.required]]
      }
    )

  }

  ngOnInit():void{
    this.ProjectData.viewProject().subscribe(data =>{
    this.projects = data})
  }

  get Content(){
    return this.form.get('content');
  }

  get Image(){
    return this.form.get('image');
  }

  get Link(){
    return this.form.get('link');
  }

  createProject(content: String, image:String, link:String){
    let newProject : Project = new Project(content, image, link);
    this.ProjectData.createProject(newProject).subscribe(data =>{
      this.ProjectData=data
      window.location.reload();
  })
}

  deleteProject(id:number){
    this.ProjectData.deleteProject(id).subscribe(data =>{
      this.ProjectData=data
      window.location.reload();
  })
  }

  saveId(id:number, project:Project){
    this.editId = id;
    this.projectToEdit = project;
  }

  editProject(content:String, image:String, link:String){
    let newProject = new Project(content, image, link)
    this.ProjectData.editProject(newProject, this.editId).subscribe(data =>{
      this.ProjectData=data
      window.location.reload();
  })
  }
}