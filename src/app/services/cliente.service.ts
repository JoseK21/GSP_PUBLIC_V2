import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api = 'http://localhost:65436/customers';
  constructor(
    private http: HttpClient
  ) { }

  getAllCliente() {
    const path = `${this.api}/`;
    return this.http.get<Cliente[]>(path);
  }

  getCliente(id: string) {
    const path = `${this.api}/${id}`;
    return this.http.get<Cliente>(path);
  }

  createCliente(cliente: Cliente) {
    console.log('>>>>' + cliente)
    const path = `${this.api}/new`;
    return this.http.post(path, "'" + JSON.stringify(cliente) + "'", httpOptions);
  }

  updateCliente(cliente: Cliente) {
    const path = `${this.api}/${cliente.ID}`;
    return this.http.put<Cliente>(path, "'" + JSON.stringify(cliente) + "'");
  }

  deleteCliente(id: string) {
    console.log('>>>>' + id)
    const path = `${this.api}/delete/${id}`;
    return this.http.delete(path);
  }
}
