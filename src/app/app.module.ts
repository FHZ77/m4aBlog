import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuariosComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
