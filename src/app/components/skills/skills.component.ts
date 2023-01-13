import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : any;

  constructor(private SkillData:SkillService) { }

  ngOnInit(): void {
    this.SkillData.viewSkill().subscribe(data =>{
      this.skills = data})
  }
}
