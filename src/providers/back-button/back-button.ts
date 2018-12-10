import { Injectable } from '@angular/core';
import {App, Nav, NavController, Platform, Tabs, ToastController, ViewController} from "ionic-angular";
import {AppMinimize} from "@ionic-native/app-minimize";

/*
  Generated class for the BackButtonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackButtonProvider {

  //控制硬件返回按钮是否触发，默认false
  backButtonPressed: boolean = false;

  //构造函数 依赖注入
  constructor(public platform: Platform,
              public appCtrl: App,
              public toastCtrl: ToastController,
              public appMinimize: AppMinimize
              ) { }

  //注册方法
  registerBackButtonAction(nav: Nav): void {

    nav.canGoBack()

    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
      // this.appCtrl.getActiveNavContainers()
      //如果可以返回上一页，则执行pop
      console.log(activeNav)
      console.log(activeNav.getViews().length)

      if (activeNav.getViews()[0] && !activeNav.getViews()[0].isFirst()){
        activeNav.getViews()[0].dismiss()
      }

      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        this.appMinimize.minimize();
        // if (nav == null || nav._selectHistory[nav._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
        //   //执行退出
        //   this.appMinimize.minimize();
        // } else {
        //   //选择首页第一个的标签
        //   tabRef.select(0);
        // }
      }
    });
  }

}
