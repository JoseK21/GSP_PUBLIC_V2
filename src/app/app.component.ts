import { Component } from '@angular/core';
import { TaskService} from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GasStationPharmacyPublic';

  constructor(
    private taskService: TaskService
  ) {}

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }

  getTask() { // Poner atributo de entrada y pasar luego aqui abajo
    this.taskService.getTask('Q84S1')
      .subscribe(task => {
        console.log(task);
      });
  }

  createTask() {
    const task = {
      ID: '118428848',
      Name: 'Marcelo',
      Lastname: 'Sanchez',
      Address: 'OH',
      Birthday: '12/12/12',
      PhoneNumber: 11111,
      MedicalHistory: 'VOID'
    };
    this.taskService.createTask(task).subscribe((newTask) => {console.log(newTask);
    });
  }

  updateTask() {
    const task = {
      ID: '5181882',
      Name: 'Roger',
      Lastname: 'Weiss',
      Address: 'OH',
      Birthday: '12/12/55',
      PhoneNumber: 11111,
      MedicalHistory: 'NOT VOID'
    };
    this.taskService.updateTask(task)
      .subscribe(todo => {
        console.log(todo);
      });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
      .subscribe((data) => {
        console.log(data);
      });
  }
}

/* Para usar la lista de tareas se injecta el
 TaskService y el metodo en el componente que desee.
*/
