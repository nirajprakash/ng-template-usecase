import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { ReusableHeaderComponent } from './reusable-header/reusable-header.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';


@NgModule({
  declarations: [
    ReusableComponent,
    ReusableHeaderComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    CommonModule,
    ReusableRoutingModule
  ]
})
export class ReusableModule { }
