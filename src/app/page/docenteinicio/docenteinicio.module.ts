import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteinicioPageRoutingModule } from './docenteinicio-routing.module';

import { DocenteinicioPage } from './docenteinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteinicioPageRoutingModule
  ],
  declarations: [DocenteinicioPage]
})
export class DocenteinicioPageModule {}
