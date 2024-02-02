import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit { 

  public usuario : Usuario = new Usuario ;
  constructor(private usuarioService:UsuarioService){
     
  }

  ngOnInit(){
    this.usuario =  this.usuarioService.getUsuario();
  }
}
