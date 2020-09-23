import { Component, OnInit, Type } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private usuariosService: UsuariosService,
               private  route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo'){
      this.usuariosService.getUsuario(id)
      .subscribe((resp: UsuarioModel) =>{
        this.usuario = resp;
        this.usuario.id = id;
      });

    }
  }

  // tslint:disable-next-line: typedef
  guardar( form: NgForm){

    if (form.invalid){
      console.log('formulario invalido');
      return;
    }

    Swal.fire({
         title:'Espere',
         text:'Guardando informacion',
         
         allowOutsideClick: false
      

    });

    Swal.showLoading();

    let peticion: Observable<any>;


    if ( this.usuario.id ){
      peticion = this.usuariosService.actualizarUsuario( this.usuario);


    } else{

       peticion = this.usuariosService.crearUsuario( this.usuario);
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.usuario.nombre,
        text: 'se actualizo correctamente'
       

      });
    });
    

  
  }
}
