import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos.component';


@NgModule({
  declarations: [
    CargosComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule
  ]
})
export class CargosModule { }
