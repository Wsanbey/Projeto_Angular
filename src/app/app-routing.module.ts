import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioModule } from './components/usuario/usuario.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./components/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {path:'',
  pathMatch:'full',
  redirectTo:'/home'
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
