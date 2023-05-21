import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizedRoutingModule } from './customized-routing.module';
import { CustomizedComponent } from './customized.component';
import { CustomExpansionPanelComponent } from './custom-expansion-panel/custom-expansion-panel.component';
import { ExpansionPanelBodyDirective } from './directive/expansion-panel-body.directive';
import { ExpansionPanelHeaderDirective } from './directive/expansion-panel-header.directive';
import { ExpansionPanelBodyTemplateDirective } from './directive/expansion-panel-body-template.directive';
import { ExpansionPanelHeaderTemplateDirective } from './directive/expansion-panel-header-template.directive';
// import { ExpansionPanelHeaderDirective } from './expansion-panel-header.directive';
// import { ExpansionPanelBodyDirective } from './expansion-panel-body.directive';

@NgModule({
  declarations: [
    CustomizedComponent,
    CustomExpansionPanelComponent,
    ExpansionPanelHeaderDirective,
    ExpansionPanelBodyDirective,
    ExpansionPanelBodyTemplateDirective,
    ExpansionPanelHeaderTemplateDirective
  ],
  imports: [
    CommonModule,
    CustomizedRoutingModule
  ]
})
export class CustomizedModule { }
