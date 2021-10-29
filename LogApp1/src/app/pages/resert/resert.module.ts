import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResertPageRoutingModule } from './resert-routing.module';

import { ResertPage } from './resert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResertPageRoutingModule
  ],
  declarations: [ResertPage]
})
export class ResertPageModule {}
