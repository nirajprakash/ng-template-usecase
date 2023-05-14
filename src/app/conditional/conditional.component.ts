import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.scss']
})
export class ConditionalComponent {

  email?: string;
  password?: string;

  _isNotLoggedIn = true;
  
  
  onSubmit() {
    // Implement login functionality here
    this.email =""
    this.password=""
    this._isNotLoggedIn = false;
  }

  logout(){
    this._isNotLoggedIn = true;
  }

}
