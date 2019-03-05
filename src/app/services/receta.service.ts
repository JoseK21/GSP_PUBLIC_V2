import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receta } from '../interfaces/receta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private api = 'http://localhost:65436/recipes';
  constructor(
    private http: HttpClient
  ) { }


  getRecipe(id: string) {
    const path = `${this.api}/${id}`;
    return this.http.get<Receta>(path);
  }


  createRecipe(receta: Receta) {
    console.log('>>>>' + receta)
    const path = `${this.api}/new`;
    return this.http.post(path, "'" + JSON.stringify(receta) + "'", httpOptions);
  }

  

  updateRecipe(receta: Receta) {
    const path = `${this.api}/${receta.RecpID}`;
    return this.http.put<Receta>(path, "'" + JSON.stringify(receta) + "'");
  }

  deleteCliente(id: string) {
    console.log('>>>>' + id)
    const path = `${this.api}/delete/${id}`;
    return this.http.delete(path);
  }
}
