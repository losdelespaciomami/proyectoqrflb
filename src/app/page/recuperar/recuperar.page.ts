import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async confirmarPass() {
    await this.alertCtrl.create({
      header: "¿Confirmar nueva contraseña?",
      message: "Si aceptas, deberas de iniciar sesión con la nueva contraseña",
      buttons: [{
        text: "Aplicar", handler: () => {
          console.log("Contraseña cambiada");
          this.navCtrl.navigateRoot('/home');
        }
      },
      {
        text: "Cancelar"
      }
    ]
    }).then( resp=>resp.present() );
  }
}
