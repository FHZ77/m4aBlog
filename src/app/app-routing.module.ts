import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';


const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: 'imagenes/:id', component: ImagenesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'usuarios'}
  ]


@NgModule({
 imports: [
   RouterModule.forRoot( routes)
 ],
 exports:[
   RouterModule
 ]
})
export class AppRoutingModule { }
