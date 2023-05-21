import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, Query, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ExpansionPanelBodyDirective } from '../directive/expansion-panel-body.directive';
import { ExpansionPanelHeaderDirective } from '../directive/expansion-panel-header.directive';
import { ExpansionPanelBodyTemplateDirective } from '../directive/expansion-panel-body-template.directive';

import { ExpansionPanelHeaderTemplateDirective } from '../directive/expansion-panel-header-template.directive';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0', paddingTop: '0', paddingBottom: '0', opacity: 0 })
      ),
      state(
        'expanded',
        style({ height: '*', paddingTop: '*', paddingBottom: '*', opacity: 1 })
      ),
      transition('collapsed <=> expanded', animate('250ms ease-out'))
    ])
  ]
})
export class CustomExpansionPanelComponent{


  isExpanded = false;

  isCollapsing = false;

  @ContentChild(ExpansionPanelHeaderDirective, { read: TemplateRef }) headerContent?: any;
  @ContentChild(ExpansionPanelHeaderTemplateDirective, { read: TemplateRef }) headerTemplate?: any;
 
  @ContentChild(ExpansionPanelBodyDirective, { read: TemplateRef }) bodyConent?: any;
  @ContentChild(ExpansionPanelBodyTemplateDirective, { read: TemplateRef }) bodyTemplate?: any;

  togglePanel() {

    if (this.isExpanded && !this.isCollapsing) {
      this.isCollapsing = true
    } else {
      this.isExpanded = !this.isExpanded;
      this.isCollapsing = false
    }

  }

  onAnimationEnd($event: AnimationEvent) {

    console.log($event)
    if ($event.toState === "collapsed") {
      this.isCollapsing = false
      this.isExpanded = false
    }

  }

  


}
