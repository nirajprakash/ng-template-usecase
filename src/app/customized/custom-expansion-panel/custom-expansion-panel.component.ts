import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, Query, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ExpansionPanelBodyDirective } from '../directive/expansion-panel-body.directive';
import { ExpansionPanelHeaderDirective } from '../directive/expansion-panel-header.directive';
import { ExpansionPanelBodyTemplateDirective } from '../directive/expansion-panel-body-template.directive';
import { NgTemplateOutlet } from '@angular/common';
// import { ExpansionPanelBodyDirective } from '../expansion-panel-body.directive';
// import { ExpansionPanelHeaderDirective } from '../expansion-panel-header.directive';

@Component({
  selector: 'app-custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.scss']
})
export class CustomExpansionPanelComponent implements AfterViewInit, AfterContentInit {
  

  @Input() title?: string;
  isExpanded = false;


  

  @ViewChild("defaultPanelTemplate",  {read: TemplateRef}) defaultBodyTemplate?: any;
  
  // @ContentChild(ExpansionPanelHeaderDirective, {read: TemplateRef}) headerTemplate?: any;
  @ContentChild(ExpansionPanelBodyDirective, {read: TemplateRef}) bodyView?:any;//ExpansionPanelBodyDirective;
  @ContentChild(ExpansionPanelBodyTemplateDirective, {read: TemplateRef}) bodyTemplate?: any;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }

  ngAfterContentInit(): void {
    console.log(this.bodyView);
      
  }

  ngAfterViewInit(): void {

    console.log(this.bodyView);

    // var bodyTemplate = this.bodyTemplate??this.defaultBodyTemplate;
    // console.log(bodyTemplate);

    // // bodyTemplate.

    // this.outlet?.viewContainer.createEmbeddedView(bodyTemplate)
    // throw new Error('Method not implemented.');
  }

  
}
