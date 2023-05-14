import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-image',
  templateUrl: './template-image.component.html',
  styleUrls: ['./template-image.component.scss']
})
export class TemplateImageComponent {
  ngOnInit(): void {
    console.log("value: ", this.value)
  }


  @Input() value?: any

  
}
