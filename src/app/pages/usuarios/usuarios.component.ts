import { Component, OnInit, Type } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  cargando = false;



  constructor( private usuariosService: UsuariosService) { }

  ngOnInit(): void {


    this.cargando = true;
    this.usuariosService.getUsuarios()
    .subscribe( resp => {this.usuarios = resp;
                         this.cargando = false;
    });
    }


 // tslint:disable-next-line: typedef
 borrarUsuario( usuario: UsuarioModel, i: number){

  Swal.fire({
    title: 'Esta seguro?',
    text: 'Esta seguro que quiere borrar la noticia?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'

     }).then( resp =>{

    if (resp.value) {
      this.usuarios.splice(i,1);
      this.usuariosService.borrarUsuario( usuario.id).subscribe();
      
    }
     });

  
 }

  

}
