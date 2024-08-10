import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1"
    
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/patients`)
  }
  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/patients/${id}`)
  }
  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}/insert`,patient)
  }
  getPatientById(id :number):Observable< Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}/patients/${id}`);
  }
  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/patients/${id}`, patient);
}
}
