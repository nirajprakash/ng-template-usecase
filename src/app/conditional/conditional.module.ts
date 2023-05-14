import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { ConditionalComponent } from './conditional.component';
import { FormsModule } from '@angular/forms';
import { SuccessTemplateComponent } from './success-template/success-template.component';


@NgModule({
  declarations: [
    ConditionalComponent,
    SuccessTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
