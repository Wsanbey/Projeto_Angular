import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioModule } from './components/usuario/usuario.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  
  {
    path: 'usuario',
    loadChildren: './usuario/Usuario.Module#UsuarioModule' 
  },

  

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
