import {Component, Input, ViewChild} from '@angular/core';
import {ParseHtmlProvider} from "../../providers/parse-html/parse-html";
import {QzoneImageDealProvider} from "../../providers/qzone-image-deal/qzone-image-deal";
import {Nav, NavController} from "ionic-angular";
import {PreviewImagePage} from "../../pages/preview-image/preview-image";
import {e} from "../../../node_modules/@angular/core/src/render3";

/**
 * Generated class for the QzoneEmotionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qzone-emotion',
  templateUrl: 'qzone-emotion.html'
})
export class QzoneEmotionComponent {

  text: string;
  @Input() emotion;

  constructor(private parseHtml: ParseHtmlProvider,private imgUtil: QzoneImageDealProvider,
              public navCtrl: NavController) {
    console.log('Hello QzoneEmotionComponent Component');
    this.text = 'Hello World';

    console.log(this.emotion)
  }

  ionViewDidEnter(){
    console.log(this.emotion)
  }

  ionViewDidLoad(){
    console.log(this.emotion)
  }

  previewImage(e) {

    console.log(e)
    this.navCtrl.push(PreviewImagePage,{
      url: e
    })

    // wx.previewImage({
    //   urls: [e.target.dataset.url],
    // })
  }

}
