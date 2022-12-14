import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './componentes/curso/curso.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionesModule } from '../inscripciones/inscripciones.module';

@NgModule({
  declarations: [
    CursoComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    InscripcionesModule
  ],
  exports: [
    CursoComponent,
    CursosComponent
  ] 
})
export class CursosModule { }
