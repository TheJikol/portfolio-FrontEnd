import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Biography } from 'src/app/models/Biography';
import { BiographyService } from 'src/app/services/biography.service';

@Component({
  selector: 'app-biographymodal',
  templateUrl: './biographymodal.component.html',
  styleUrls: ['./biographymodal.component.css']
})
export class BiographymodalComponent {
  form:FormGroup;
  biographies:any
  constructor(private formBuilder:FormBuilder, private BiographyData:BiographyService,){
    this.form = this.formBuilder.group(
      {
        content:["", [Validators.required]],
      }
    )
  }

  ngOnInit():void{
    this.BiographyData.viewBiography().subscribe(data =>{
    this.biographies = data})
  }

  get Content(){
    return this.form.get('content');
  }

  editBiography(content:String){
    let newBiography : Biography = new Biography(0, content);
    this.BiographyData.editBiographyService(newBiography).subscribe(data =>{
      this.BiographyData=data
      window.location.reload();
    })
  }
}
