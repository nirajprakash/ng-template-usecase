import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success-template',
  templateUrl: './success-template.component.html',
  styleUrls: ['./success-template.component.scss']
})
export class SuccessTemplateComponent {
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();


  onLogout($event: any){
    this.logout.emit();

  }
}
