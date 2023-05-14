import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.scss']
})
export class CustomExpansionPanelComponent {

  @Input() title?: string;
  isExpanded = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
}
