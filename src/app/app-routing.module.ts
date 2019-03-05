import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// gestion-inicio-logIn-pageFound-signIn-titulo
import { InicioComponent } from './inicio/inicio.component';
import { PageFoundComponent } from './page-found/page-found.component';

import { CActualizarComponent } from './cliente/c-actualizar/c-actualizar.component';
import { CEliminarComponent } from './cliente/c-eliminar/c-eliminar.component';
import {GestionComponent} from './gestion/gestion.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {RCrearComponent} from './receta/r-crear/r-crear.component';
import {RActualizarComponent} from './receta/r-actualizar/r-actualizar.component';
import {REliminarComponent} from './receta/r-eliminar/r-eliminar.component';
import {PEliminarComponent} from './pedido/p-eliminar/p-eliminar.component';
import {PActualizarComponent} from './pedido/p-actualizar/p-actualizar.component';
import {PCrearComponent} from './pedido/p-crear/p-crear.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  // Cliente
  { path: 'cliente/c-actualizar', component: CActualizarComponent },
  { path: 'cliente/c-eliminar', component: CEliminarComponent },
  // Recetas
  { path: 'receta/r-crear', component: RCrearComponent },
  { path: 'receta/r-actualizar', component: RActualizarComponent },
  { path: 'receta/r-eliminar', component: REliminarComponent },
  // Pedidos
  { path: 'pedido/p-crear', component: PCrearComponent },
  { path: 'pedido/p-actualizar', component: PActualizarComponent },
  { path: 'pedido/p-eliminar', component: PEliminarComponent },
// Gestion
  { path: 'gestion', component: GestionComponent },

  // Inicio
  { path: 'inicio', component: InicioComponent },
// Sign-In
  { path: 'sign-in', component: SignInComponent },
  // PageNotFound
  { path: 'pageNotFound', component: PageFoundComponent },
  // Rol

  // Error Page Not Found
  { path: '**', pathMatch: 'full', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
