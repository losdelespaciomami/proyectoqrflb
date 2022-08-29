import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor() { }
  
  nombreUsuario:String;
  contrasena:String;

  lista_usuarios = new Array();

  ngOnInit() {

  }

  grabar(){
    var existe = localStorage.getItem("datos");
    if (existe!=null) {
      this.lista_usuarios= JSON.parse(existe);
    }
    var usuario = {
        nombreUsuario: this.nombreUsuario,
        contrasena:this.contrasena
    };
    this.lista_usuarios.push(usuario);
    localStorage.setItem("datos", JSON.stringify(this.lista_usuarios));
  }

}
