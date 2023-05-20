import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Experiment1RoutingModule } from './experiment1-routing.module';
import { Experiment1Component } from './experiment1.component';
import { SectComponent } from './sect/sect.component';
import { BodyTDirective } from './directive/body-t.directive';
import { BodyDirective } from './directive/body.directive';


@NgModule({
  declarations: [
    Experiment1Component,
    SectComponent,
    BodyTDirective,
    BodyDirective
  ],
  imports: [
    CommonModule,
    Experiment1RoutingModule
  ]
})
export class Experiment1Module { }
