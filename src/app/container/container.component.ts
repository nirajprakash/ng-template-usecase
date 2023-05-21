import { Component, } from '@angular/core';

import { Location } from '@angular/common';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {

  constructor(
    private location: Location,) {

  }
  _onBackPress() {

    this.location.back()
  }
}
