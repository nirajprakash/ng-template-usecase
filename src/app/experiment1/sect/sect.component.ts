import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { BodyDirective } from '../directive/body.directive';
import { BodyTDirective } from '../directive/body-t.directive';

@Component({
  selector: 'app-sect',
  templateUrl: './sect.component.html',
  styleUrls: ['./sect.component.scss']
})
export class SectComponent {

  @Input() title?: string;
  isExpanded = false;


  

  @ViewChild("defaultPanelTemplate",  {read: TemplateRef}) defaultBodyTemplate?: any;
  
  // @ContentChild(ExpansionPanelHeaderDirective, {read: TemplateRef}) headerTemplate?: any;
  @ContentChild(BodyDirective, {read: TemplateRef}) bodyView?:any;//ExpansionPanelBodyDirective;
  @ContentChild(BodyTDirective, {read: TemplateRef}) bodyTemplate?: any;

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
