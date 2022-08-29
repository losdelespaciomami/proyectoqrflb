import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private alertCTRL: AlertController) { }

  
  lista_usuarios=new Array();

  ngOnInit() {
    this.listar();
  }

  eliminar(nombreUsuario){
    this.lista_usuarios=new Array();
    var arreglo_temp = new Array();
    var datos = localStorage.getItem("datos");
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    // el imbolo del arreglo es cambiado por ;
    datos = datos.split("},{").join("};{");
    // separa cada uno de los registros
    arreglo_temp = datos.split(";");
    for (let index = 0; index < arreglo_temp.length; index++) {      
      var reg= JSON.parse( arreglo_temp[index] );
      var usuario ={
        nombreUsuario: reg.nombreUsuario,
        contrasena: reg.contrasena
      };
      if(nombreUsuario!=reg.nombreUsuario){
          this.lista_usuarios.push(usuario);
      }
    }
    localStorage.setItem("datos",JSON.stringify(this.lista_usuarios));
  }
  
  // recuperar desde localstorage
  listar(){
    var arreglo_temp = new Array();
    var datos = localStorage.getItem("datos");
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    // el imbolo del arreglo es cambiado por ;
    datos = datos.split("},{").join("};{");
    // separa cada uno de los registros
    arreglo_temp = datos.split(";");
    for (let index = 0; index < arreglo_temp.length; index++) {      
      var reg= JSON.parse( arreglo_temp[index] );
      var usuario ={
        nombreUsuario: reg.nombreUsuario,
        contrasena: reg.contrasena
      };
      this.lista_usuarios.push(usuario);
    }
    console.log(this.lista_usuarios);
  }

}