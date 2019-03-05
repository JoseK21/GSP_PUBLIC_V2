import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './../interfaces/task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = 'http://localhost:65436/customers/';


  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    const path = `${this.api}`;
    return this.http.get<Task[]>(path);
  }

  getTask(id: string) {
    const path = `${this.api}${id}`;
    return this.http.get<Task>(path);
  }

  createTask(task: Task) {
    const path = `${this.api}new`;
    return this.http.post(path, "'" + JSON.stringify(task) + "'", httpOptions);
  }

  updateTask(task: Task) {
    const path = `${this.api}/update/${task.ID}`;
    return this.http.put<Task>(path, "'" + JSON.stringify(task) + "'", httpOptions);
  }

  deleteTask(id: string) {
    const path = `${this.api}/delete/${id}`;
    return this.http.delete(path);
  }
}
