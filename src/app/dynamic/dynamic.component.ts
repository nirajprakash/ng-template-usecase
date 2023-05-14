import { Component, ComponentFactoryResolver } from '@angular/core';
import { DynamicTemplate, ModelDynamicItem } from './types';
import { TemplateTextComponent } from './template-text/template-text.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {

   _list: ModelDynamicItem[] = [
    {
      header:"Normal Text",
      valueType:"text",
      value:"template having normal text."
    },
    {
      header:"Input Text",
      valueType:"input",
      value:"input text inside template"
    },
    {
      header:"Image Placeholder",
      valueType:"image",
      value:"https://picsum.photos/500"
    }

  ]

  
_onInputChange($event: any) {

  console.log("$event: ", $event)
  // throw new Error('Method not implemented.');
  }

  

  

}
