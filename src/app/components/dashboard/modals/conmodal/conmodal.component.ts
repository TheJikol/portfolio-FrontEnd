import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-conmodal',
  templateUrl: './conmodal.component.html',
  styleUrls: ['./conmodal.component.css']
})
export class ConmodalComponent {
  form:FormGroup;
  contacts:any;
  constructor(private formBuilder:FormBuilder, private ContactData:ContactService,){
    this.form = this.formBuilder.group(
      {
        content:["", [Validators.required]],
      }
    )
  }

  ngOnInit():void{
    this.ContactData.viewContact().subscribe(data =>{
    this.contacts = data})
  }

  get Content(){
    return this.form.get('content')
  }

  editContact(content:String){
    let newContact : Contact = new Contact(0, content);
    this.ContactData.editContactService(newContact).subscribe(data =>{
      this.ContactData=data
      window.location.reload();
    })
  }
}
