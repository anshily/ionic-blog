import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {RainbowPage} from "../pages/rainbow/rainbow";
import {AppMinimize} from "@ionic-native/app-minimize";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RainbowPage;

  @ViewChild('content') content;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public appMinimize: AppMinimize
              // private backButtonService: BackButtonProvider
  ) {
    this.initializeApp();

    platform.ready().then(res => {
      platform.registerBackButtonAction(() => {

        if (this.nav.canGoBack()){
          // alert('can go back')
          this.nav.pop();
        } else {
          this.appMinimize.minimize();
          // alert('back!!!')
        }

        // this.backButtonService.registerBackButtonAction(this.content)
        // this.appMinimize.minimize();
        // alert("是否退出")
      })
    })

    // 从后台进入
    platform.resume.subscribe((res) => {
      console.log(res)
      console.log('resume')
    })

    // 点击硬件返回键
    platform.backButton.subscribe((res) => {
      console.log(res)
      console.log('backButton')
    })

    // 退出前台
    platform.pause.subscribe((res) => {
      console.log(res)
      console.log('pause')
    })

    // 分屏等改变窗口大小
    platform.resize.subscribe((res) => {
      console.log(res)
      console.log('pause')
    })

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Rainbow', component: RainbowPage },
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      // this.statusBar.hide();
      // this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });

  }


  openPage(page) {

    this.nav.push(page.component).then(res => {
      console.log(res)
    })
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component).then(res => {
    //   console.log(res)
    // });
  }

}
