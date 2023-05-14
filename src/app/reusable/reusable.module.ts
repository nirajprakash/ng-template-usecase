import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { ReusableCardComponent } from './reusable-card/reusable-card.component';
import { DescriptionDirective } from './description.directive';


@NgModule({
  declarations: [
    ReusableComponent,
    ReusableCardComponent,
    DescriptionDirective
  ],
  imports: [
    CommonModule,
    ReusableRoutingModule
  ]
})
export class ReusableModule { }
