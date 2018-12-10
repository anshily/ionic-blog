import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public statusBar: StatusBar) {

  }

  switchStatusBar(key){
    switch (key) {
      case 'BlackTranslucent':
        this.statusBar.styleBlackTranslucent();
        break;
      case 'LightContent':
        this.statusBar.styleLightContent();
        break;
      case 'BlackOpaque':
        this.statusBar.styleBlackOpaque();
      case 'hide':
        this.statusBar.hide();
        break;
      case 'show':
        this.statusBar.show();
        break;
    }
  }

}
