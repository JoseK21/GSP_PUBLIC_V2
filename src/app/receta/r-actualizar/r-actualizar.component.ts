import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-r-actualizar',
  templateUrl: './r-actualizar.component.html',
  styleUrls: ['./r-actualizar.component.css']
})
export class RActualizarComponent implements OnInit { 
  constructor(private recetaService: RecetaService) { }

  doctor = '';
  medicines = '';
  id = '';

  getRecipe(id : string) { 
    this.recetaService.getRecipe(id)
    .subscribe(recipe => {
      
      this.doctor = recipe.Doctor;
      this.medicines = recipe.Medicines;
      this.id = recipe.RecpID;
      console.log(recipe); 
    });
  }
  ngOnInit() {
    this.doctor = '';
    this.medicines = '';
    this.id ='';
  }

}
