import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { DescriptionDirective } from '../description.directive';
import { ModelCard } from '../types';

@Component({
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.scss']
})
export class ReusableCardComponent {

  @Input() model?: ModelCard 
  
  @ContentChild(DescriptionDirective, {read: TemplateRef}) cardDescriptionTemplate?: any;

  // get descriptionTemplate()  {
  //   return this.cardDescriptionTemplate;
  // }

}
