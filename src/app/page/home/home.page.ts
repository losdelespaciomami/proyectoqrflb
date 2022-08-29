import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
