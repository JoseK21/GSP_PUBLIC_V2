import { Component, OnInit } from '@angular/core';
import { PaqueteService } from 'src/app/services/paquete.service';

@Component({
  selector: 'app-p-eliminar',
  templateUrl: './p-eliminar.component.html',
  styleUrls: ['./p-eliminar.component.css']
})
export class PEliminarComponent implements OnInit {

  constructor(private paqueteService: PaqueteService) { }

  suc = '';
  hor = '';
  getPaquete(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.paqueteService.getPaquete(id).subscribe(client => {
      this.suc = client.PickUpBranch;
      this.hor = client.PickUpTime;
      console.log(client)
       
    });
  }

  ngOnInit() {
    this.suc = '';
    this.hor = '';
  }

}
