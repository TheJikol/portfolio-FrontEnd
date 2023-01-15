import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado :Boolean = false;

  constructor() { }

  experienceButton(id:string){
    let doc:HTMLElement = document.getElementById(id)!
      doc.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser")){
      this.logueado = true;
    }
    else{
      this.logueado = false;
    }
  }

  closeSession(){
    sessionStorage.removeItem("currentUser");
    window.location.reload();
  }

}
