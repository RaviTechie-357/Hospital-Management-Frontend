import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v3"

  getMedicine():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/medicines`)
  }

  createMedicine(medicine: Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`,medicine)
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/medicines/${id}`)
  }

  updateMedicine(id: number, medicin: Medicine):Observable<Object>{
    return this.httpClient.put<Medicine>(`${this.baseUrl}/medicine/${id}`, medicin);
  }

  delete(id:number):Observable<Object>{
   return this.httpClient.delete(`${this.baseUrl}/medicine/${id}`)

  }

}
