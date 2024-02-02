import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public usuario: Usuario = new Usuario;

  constructor(private usuarioServeci :UsuarioService) { }

  ngOnInit(){
    this.usuario = this.usuarioServeci.getUsuario();
  }

}
