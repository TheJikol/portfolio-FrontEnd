import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BiographyService } from 'src/app/services/biography.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private BiographyData:BiographyService,){
    this.form = this.formBuilder.group(
      {
        content:["", [Validators.required]],
        image:["", [Validators.required]]
      }
    )
  }

  ngOnInit():void{

  }

  get Content(){
    return this.form.get('content');
  }

  get Image(){
    return this.form.get('image');
  }


}
