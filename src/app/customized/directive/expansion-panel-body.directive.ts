import { ContentChild, Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[body]'
})
export class ExpansionPanelBodyDirective {

  
  constructor(
    // private viewContainerRef: ViewContainerRef,
    // private templateRef: TemplateRef<any>
  ) { }

  
  // @ContentChild() headerCell: CdkHeaderCellDef;

}
