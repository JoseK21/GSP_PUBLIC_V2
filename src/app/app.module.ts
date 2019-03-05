import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Routing
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageFoundComponent } from './page-found/page-found.component';
import { CActualizarComponent } from './cliente/c-actualizar/c-actualizar.component';
import { CEliminarComponent } from './cliente/c-eliminar/c-eliminar.component';
import { REliminarComponent } from './receta/r-eliminar/r-eliminar.component';
import { RCrearComponent } from './receta/r-crear/r-crear.component';
import { RActualizarComponent } from './receta/r-actualizar/r-actualizar.component';
import { PActualizarComponent } from './pedido/p-actualizar/p-actualizar.component';
import { PCrearComponent } from './pedido/p-crear/p-crear.component';
import { PEliminarComponent } from './pedido/p-eliminar/p-eliminar.component';
import { GestionComponent } from './gestion/gestion.component';



@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    InicioComponent,
    LogInComponent,
    SignInComponent,
    PageFoundComponent,
    CActualizarComponent,
    CEliminarComponent,
    REliminarComponent,
    RCrearComponent,
    RActualizarComponent,
    PActualizarComponent,
    PCrearComponent,
    PEliminarComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
