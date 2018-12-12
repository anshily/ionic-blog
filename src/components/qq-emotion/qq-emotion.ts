import { Component } from '@angular/core';

/**
 * Generated class for the QqEmotionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qq-emotion',
  templateUrl: 'qq-emotion.html'
})
export class QqEmotionComponent {

  text: string;

  constructor() {
    console.log('Hello QqEmotionComponent Component');
    this.text = 'Hello World';
  }

}
