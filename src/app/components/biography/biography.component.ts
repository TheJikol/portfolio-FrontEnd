import { Component, OnInit } from '@angular/core';
import { BiographyService } from 'src/app/services/biography.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  myBiography: any;
  logueado: Boolean = false;
  constructor(private BiographyData:BiographyService) { }

  ngOnInit(): void {
    this.BiographyData.viewBiography().subscribe(data =>{
      this.myBiography = data.content
    })

    sessionStorage.getItem("currentUser");

    if(sessionStorage.getItem("currentUser")){
      this.logueado = true;
    }
    else{
      this.logueado = false;
    }
  }

}
