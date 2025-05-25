import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  imports: [CommonModule,FormsModule],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css'
})
export class FileuploadComponent {
  fileName='';
  constructor(private http:HttpClient){}
onFileSelected(event:Event){
  const inputElement:File= event.target.file[0];
  if(inputElement){
    this.fileName=inputElement.name;
    const formData=new FormData();
    formData.append('thumbnail',inputElement);
    const upload$=this.http.post(
      'http://localhost:8080/patient/save',
      formData);
    upload$.subscribe();
  }
  
  }
}