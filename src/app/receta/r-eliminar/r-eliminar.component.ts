import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-r-eliminar',
  templateUrl: './r-eliminar.component.html',
  styleUrls: ['./r-eliminar.component.css']
})
export class REliminarComponent implements OnInit {

  constructor(private recetaService: RecetaService) { }

  doctor = '';
  medPre = '';
  getRecipe(id : string) { 
    this.recetaService.getRecipe(id)
    .subscribe(recipe => {
      this.doctor = recipe.Doctor;
      this.medPre = recipe.Medicines;
      console.log(recipe); 
    });
  }
  ngOnInit() {
    this.doctor ='';
    this.medPre = '';

  }

}
