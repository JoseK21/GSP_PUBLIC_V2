import { Component, OnInit } from '@angular/core';
import { PaqueteService} from 'src/app/services/paquete.service';


@Component({
  selector: 'app-p-crear',
  templateUrl: './p-crear.component.html',
  styleUrls: ['./p-crear.component.css']
})
export class PCrearComponent implements OnInit {

  constructor(
    private paqueteService: PaqueteService
  ) {}

  createPaquete(id: string, pub: string, cl: string, pn: string, c: string, put: string, s: string) {
    const paquete = {
      ID: id,
      PickUpBranch: pub,
      Client: cl,
      PhoneNumber: pn,
      Content: c,
      PickUpTime: put,
      Status: s,

    };
    console.log(paquete);
    this.paqueteService.createPaquete(paquete).subscribe((newPaquete) => {console.log(newPaquete);
    });
  }
  ngOnInit() {
  }

}
