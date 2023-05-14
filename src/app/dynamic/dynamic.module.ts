import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { TemplateTextComponent } from './template-text/template-text.component';
import { TemplateInputComponent } from './template-input/template-input.component';
import { FormsModule } from '@angular/forms';
import { TemplateImageComponent } from './template-image/template-image.component';


@NgModule({
  declarations: [
    DynamicComponent, 
    DynamicCardComponent, TemplateTextComponent, TemplateInputComponent, TemplateImageComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    FormsModule
  ]
})
export class DynamicModule { }
