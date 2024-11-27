import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotaDetalleComponent } from './nota-detalle/nota-detalle.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'lista-notas', 
    component: ListaNotasComponent },

  { path: 'agregar-nota', 
    component: AgregarNotaComponent }, 

  { path: 'editar-nota/:id', 
    component: EditarNotaComponent }, 
  
    { path: 'nota-detalle/:id', 
      component: NotaDetalleComponent },
  
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  
      { path: 'login', component: LoginComponent },
  
      { path: 'register', component: RegisterComponent },
  
      { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
