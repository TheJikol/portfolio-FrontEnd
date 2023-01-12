import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences : any;

  constructor(private ExperienceData:ExperienceService) { }

  ngOnInit(): void {
    this.ExperienceData.viewExperience().subscribe(data =>{
      this.experiences = data})
  }
}
