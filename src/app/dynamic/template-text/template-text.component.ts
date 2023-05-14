import { Component, Input, OnInit } from '@angular/core';
import { DynamicTemplate } from '../types';

@Component({
  selector: 'app-template-text',
  templateUrl: './template-text.component.html',
  styleUrls: ['./template-text.component.scss']
})
export class TemplateTextComponent implements OnInit {
  ngOnInit(): void {
    console.log("value: ", this.value)
  }


  @Input() value?: any

  

}
