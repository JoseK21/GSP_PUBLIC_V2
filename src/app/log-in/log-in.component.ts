import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../services/cliente.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor( private clienteService: ClienteService) {
  }

  password = '';
  id = '';

  getCliente(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.clienteService.getCliente(id)   
      .subscribe(client => {
        this.password = client.Password;
        this.id = client.ID;
        console.log(client);
      });
  }
  ngOnInit() {
    this.password = '';
    this.id = '';
  }
  
}
