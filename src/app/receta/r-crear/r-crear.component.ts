import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-r-crear',
  templateUrl: './r-crear.component.html',
  styleUrls: ['./r-crear.component.css']
})
export class RCrearComponent implements OnInit {

  constructor(private recetaService: RecetaService) { }

  private api = 'http://localhost:65436/recipes/';

  createRecipe(v1: string, v2: string, v3: string) {
    const receta = {
      RecpID: v1,
      Doctor: v2,
      Medicines: v3,
    };
    console.log(receta);
    this.recetaService.createRecipe(receta).subscribe((newReceta) => {console.log(newReceta);
    });
  }

  ngOnInit() {
  }

}
