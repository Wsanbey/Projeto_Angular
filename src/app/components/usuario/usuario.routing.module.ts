import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsuarioModule } from './usuario.module';
import { UsuarioComponent } from './usuario.component';
  
const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
} 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class UsuarioRoutingModule { }
