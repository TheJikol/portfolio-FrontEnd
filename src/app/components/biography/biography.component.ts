import { Component, OnInit } from '@angular/core';
import { BiographyService } from 'src/app/services/biography.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  myBiography:any;
  constructor(private BiographyData:BiographyService) { }

  ngOnInit(): void {
    this.BiographyData.viewBiography().subscribe(data =>{
      this.myBiography = data.content
    })
  }

}
