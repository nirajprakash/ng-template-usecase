import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizedRoutingModule } from './customized-routing.module';
import { CustomizedComponent } from './customized.component';
import { CustomExpansionPanelComponent } from './custom-expansion-panel/custom-expansion-panel.component';


@NgModule({
  declarations: [
    CustomizedComponent,
    CustomExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    CustomizedRoutingModule
  ]
})
export class CustomizedModule { }
