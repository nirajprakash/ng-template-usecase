import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-template-input',
  templateUrl: './template-input.component.html',
  styleUrls: ['./template-input.component.scss']
})
export class TemplateInputComponent {
  ngOnInit(): void {
    console.log("value: ", this.value)
  }


  @Input() value: any
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  // @Output() er: EventEmitter<any> = new EventEmitter<any>();

  onChange($event: any) {

    this.valueChange.emit($event)

  }
}
