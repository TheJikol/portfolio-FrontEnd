import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-expmodal',
  templateUrl: './expmodal.component.html',
  styleUrls: ['./expmodal.component.css']
})
export class ExpmodalComponent {
  form:FormGroup;
  experiences:any;
  editId:number = -1;
  experienceToEdit:Experience = new Experience("","")
  constructor(private formBuilder:FormBuilder, private ExperienceData:ExperienceService){


    this.form = this.formBuilder.group(
      {
        content:["", [Validators.required]],
        image:["", [Validators.required]]
      }
    )

  }

  ngOnInit():void{
    this.ExperienceData.viewExperience().subscribe(data =>{
    console.log(JSON.stringify(data))
    this.experiences = data})
  }

  get Content(){
    return this.form.get('content');
  }

  get Image(){
    return this.form.get('image');
  }

  createExperience(content: String, image:String){
    let newExperience : Experience = new Experience(content, image);
    this.ExperienceData.createExperience(newExperience).subscribe(data =>{
      this.ExperienceData=data
      window.location.reload();
  })
}

  deleteExperience(id:number){
    this.ExperienceData.deleteExperience(id).subscribe(data =>{
      this.ExperienceData=data
      window.location.reload();
  })
  }

  saveId(id:number, experience:Experience){
    this.editId = id;
    this.experienceToEdit = experience;
  }

  editExperience(content:String, image:String){
    let newExperience = new Experience(content, image)
    this.ExperienceData.editExperience(newExperience, this.editId).subscribe(data =>{
      this.ExperienceData=data
      window.location.reload();
  })
  }
}
