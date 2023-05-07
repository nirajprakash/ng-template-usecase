import { Component } from '@angular/core';
import { ModelCard } from './types';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent {

  _model1 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Ankit",
    description :"Text"
  }

  _model2 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Ankit",
    description :"https://picsum.photos/500"
  }


}
