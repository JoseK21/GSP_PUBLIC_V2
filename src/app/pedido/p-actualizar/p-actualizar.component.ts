import { Component, OnInit } from '@angular/core';
import { PaqueteService } from 'src/app/services/paquete.service';

@Component({
  selector: 'app-p-actualizar',
  templateUrl: './p-actualizar.component.html',
  styleUrls: ['./p-actualizar.component.css']
})
export class PActualizarComponent implements OnInit {

  constructor(private paqueteService: PaqueteService) { }

  id = '';
  client = '';
  phone = '';
  pickUpBranch = '';
  pickUpTime = '';
  content = '';

  getPaquete(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.paqueteService.getPaquete(id).subscribe(client => {

      this.id = client.ID;
      this.client = client.Client;
      this.phone = client.PhoneNumber;
      this.pickUpBranch = client.PickUpBranch;
      this.pickUpTime = client.PickUpTime;
      this.content = client.Content;

      console.log(client)
       
    });
  }
  ngOnInit() {
    
    this.id = '';
    this.client = '';
    this.phone = '';
    this.pickUpBranch = '';
    this.pickUpTime = '';
    this.content = '';

  }

}
