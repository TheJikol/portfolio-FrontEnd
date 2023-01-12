import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations:any;

  constructor(private EducationData:EducationService) { }

  ngOnInit(): void {
    this.EducationData.viewEducation().subscribe(data =>{
      this.educations = data})
  }

}
