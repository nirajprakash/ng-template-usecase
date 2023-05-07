import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { ReusableCardComponent } from './reusable-card/reusable-card.component';
import { DescriptionDirective } from './description.directive';


@NgModule({
  declarations: [
    ReusableComponent,
    Card1Component,
    Card2Component,
    ReusableCardComponent,
    DescriptionDirective
  ],
  imports: [
    CommonModule,
    ReusableRoutingModule
  ]
})
export class ReusableModule { }
