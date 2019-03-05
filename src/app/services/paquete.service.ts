import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paquete } from '../interfaces/paquete';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  
  private api = 'http://localhost:65436/packages';
  constructor(
    private http: HttpClient
  ) { }


  getPaquete(id: string) {
    const path = `${this.api}/${id}`;
    return this.http.get<Paquete>(path);
  }


  createPaquete(paquete: Paquete) {
    console.log('>>>>' + paquete)
    const path = `${this.api}/new`;
    return this.http.post(path, "'" + JSON.stringify(paquete) + "'", httpOptions);
  }
}
