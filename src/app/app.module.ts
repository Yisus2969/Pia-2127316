import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { NotaDetalleComponent } from './nota-detalle/nota-detalle.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotasService } from './notas.service';
import { AuthService } from './auth.service'; 
import { AuthGuard } from './auth.guard'; 

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [AppComponent, AgregarNotaComponent, ListaNotasComponent, NotaDetalleComponent, EditarNotaComponent, LoginComponent, RegisterComponent, MenuComponent, PerfilComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService, AuthGuard, NotasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
