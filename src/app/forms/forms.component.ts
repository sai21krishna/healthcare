import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormServicesService } from '../service/form-services.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-forms',
  standalone:true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  p_id: number=0;
  p_name: string ='';
  guardian: string ='';
  age: number= 0 ;
  contact: string='';
  diagnosis:string='';
  fetchPatient : any = null;
  successMessage: string='';
  errorMessage: string='';

  constructor(private formsService: FormServicesService){}
    submitForm(){
      const patient ={p_name:this.p_name,guardian:this.guardian,age:this.age,contact:this.contact,diagnosis:this.diagnosis};
      this.successMessage;
      this.errorMessage;
      this.formsService.savePatient(patient).subscribe(
        (response) => {
          this.successMessage = "successful";
          console.log(patient.age);
        },
        (error) => {
          this.errorMessage = error;
          console.log(error);
        }
      );
    }


    fetchPatientById(){
      if(!this.p_id){
        this.errorMessage = 'Please enter a valid id';
      }

      
      this.fetchPatient=null;
      this.formsService.getPatientbyId(this.p_id).subscribe(
        (response) => {
          this.fetchPatient = response;
          console.log(response);
        },
        (error) => {
          this.errorMessage = error;
          console.log(error);
        }
      )
    }
}
