import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skimodal',
  templateUrl: './skimodal.component.html',
  styleUrls: ['./skimodal.component.css']
})
export class SkimodalComponent {
  form:FormGroup;
  skills:any;
  editId:number = -1;
  skillToEdit:Skill = new Skill("",0);
  constructor(private formBuilder:FormBuilder, private SkillData:SkillService){


    this.form = this.formBuilder.group(
      {
        percent:["", [Validators.required]],
        image:["", [Validators.required]]
      }
    )

  }

  ngOnInit():void{
    this.SkillData.viewSkill().subscribe(data =>{
    console.log(JSON.stringify(data))
    this.skills = data});
  }

  get Percent(){
    return this.form.get('percent');
  }

  get Image(){
    return this.form.get('image');
  }

  createSkill(percent:string, image:String){
    let percentInt = parseInt(percent);
    let newSkill : Skill = new Skill(image, percentInt);
    this.SkillData.createSkill(newSkill).subscribe(data =>{
      this.SkillData=data;
      window.location.reload();
  })
}

  deleteSkill(id:number){
    this.SkillData.deleteSkill(id).subscribe(data =>{
      this.SkillData=data;
      window.location.reload();
  })
  }

  saveId(id:number, skill:Skill){
    this.editId = id;
    this.skillToEdit = skill;
  }

  editSkill(percent:string, image:String){
    let percentInt = parseInt(percent);
    let newSkill = new Skill(image, percentInt);
    this.SkillData.editSkill(newSkill, this.editId).subscribe(data =>{
      this.SkillData=data
      window.location.reload();
  })
  }
}
