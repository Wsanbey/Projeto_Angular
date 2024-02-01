import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public texto: string ="";
  public clicado:boolean = false;
  
  constructor(){
    
  }
  ngOnInit(){
     this.texto= "Eu estou ligado"
  }

  clicou(){  

    if(this.clicado){
      this.texto="Desativado"
      this.clicado = false
    }else{
      this.texto="Ativo"
      this.clicado = true
    }
  }
}
