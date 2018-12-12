import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreviewImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview-image',
  templateUrl: 'preview-image.html',
})
export class PreviewImagePage {

  url;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams)
    console.log(navParams.get('url'));

    this.url = navParams.get('url');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewImagePage');
  }

}
