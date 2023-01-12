import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myContact:any;
  constructor(private ContactData:ContactService) { }

  ngOnInit(): void {
    this.ContactData.viewContact().subscribe(data =>{
      this.myContact = data.content
    })
  }

}
