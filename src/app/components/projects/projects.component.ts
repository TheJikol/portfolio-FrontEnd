import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : any;

  constructor(private ProjectData:ProjectService) { }

  ngOnInit(): void {
    this.ProjectData.viewProject().subscribe(data =>{
      this.projects = data})
  }
}
