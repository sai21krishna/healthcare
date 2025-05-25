import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormServicesService } from '../service/form-services.service';
import { error } from 'console';

@Component({
  selector: 'app-users',
  imports: [FormsModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  user = {name:'',email:''};
  message : any;

  constructor(private formService: FormServicesService){}
    
    submitForm(){
      this.formService.savePatient(this.user).subscribe(
        (response) => {
        this.message = response;
      },error => {
        console.error(error);
        this.message = 'request did not go through';
      }
    ); 
  }  
}