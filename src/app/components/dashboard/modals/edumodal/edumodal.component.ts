import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edumodal',
  templateUrl: './edumodal.component.html',
  styleUrls: ['./edumodal.component.css']
})
export class EdumodalComponent {
  form:FormGroup;
  educations:any;
  editIdEdu:number = -2;
  educationToEdit:Education = new Education("","")
  constructor(private formBuilder:FormBuilder, private EducationData:EducationService){


    this.form = this.formBuilder.group(
      {
        content:["", [Validators.required]],
        image:["", [Validators.required]]
      }
    )

  }

  ngOnInit():void{
    this.EducationData.viewEducation().subscribe(data =>{
    this.educations = data})
  }

  get Content(){
    return this.form.get('content');
  }

  get Image(){
    return this.form.get('image');
  }

  createEducation(content: String, image:String){
    let newEducation : Education = new Education(content, image);
    this.EducationData.createEducation(newEducation).subscribe(data =>{
      this.EducationData=data
      window.location.reload();
  })
}

  deleteEducation(id:number){
    this.EducationData.deleteEducation(id).subscribe(data =>{
      this.EducationData=data
      window.location.reload();
  })
  }

  saveIdEdu(id:number, education:Education){
    this.editIdEdu = id;
    this.educationToEdit = education
  }

  editEducation(content:String, image:String){
    console.log(this.editIdEdu)
    let newEducation = new Education(content, image)
    this.EducationData.editEducation(newEducation, this.editIdEdu).subscribe(data =>{
      this.EducationData=data
      window.location.reload();

  })
  }
}
