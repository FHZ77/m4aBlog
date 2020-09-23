import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://m4ablog.firebaseio.com';

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  crearUsuario( usuario: UsuarioModel){

    return this.http.post(`${ this.url}/usuarios.json`, usuario)
    .pipe(
      map( (resp: any) =>{
        usuario.id = resp.name;
        return usuario;
      })
    );

  }

  // tslint:disable-next-line: typedef
  actualizarUsuario(usuario: UsuarioModel){

    const usuarioTemp = {
      ...usuario
    };
    
    delete usuarioTemp.id;


    return this.http.put(`${this.url}/usuarios/${usuario.id}.json`, usuarioTemp);
  }


  // tslint:disable-next-line: typedef
  borrarUsuario( id: string){

    return this.http.delete(`${ this.url}/usuarios/${id}.json`);
  }


  // tslint:disable-next-line: typedef
  getUsuario(id: string){
    return this.http.get(`${ this.url}/usuarios/${id}.json`);
  }

  // tslint:disable-next-line: typedef
  getUsuarios(){
    return this.http.get(`${ this.url}/usuarios.json`)
    .pipe(
      map(resp => this.crearArreglo(resp) )
    );
  }

  // tslint:disable-next-line: typedef
  private crearArreglo( usuariosObj: object) {

    const usuarios: UsuarioModel[] = [];

    if (usuariosObj === null) {return []; }

    Object.keys(usuariosObj).forEach( key => {

      const usuario: UsuarioModel = usuariosObj[key];
      usuario.id = key;

      usuarios.push( usuario );
    });

    return usuarios;
  }


}
