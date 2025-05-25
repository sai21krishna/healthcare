import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServicesService {
  BASEURL = 'http://localhost:8080/patient/save';
  constructor(private http: HttpClient) { }

  savePatient(patient : any){
    return this.http.post(this.BASEURL,patient,{responseType: 'text' as 'json'});
  }

  getPatientbyId(id: number){
    return this.http.get("http://localhost:8080/patient/get/"+id);

  }
}

