import { Component } from '@angular/core';

/**
 * Generated class for the SwLoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sw-loading',
  templateUrl: 'sw-loading.html'
})
export class SwLoadingComponent {

  text: string;

  constructor() {
    console.log('Hello SwLoadingComponent Component');
    this.text = 'Hello World';
  }

}
