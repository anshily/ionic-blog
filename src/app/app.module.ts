import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MarkdownModule} from "ngx-markdown";
import {RainbowPage} from "../pages/rainbow/rainbow";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {BrowserTab} from "@ionic-native/browser-tab";
import {AppMinimize} from "@ionic-native/app-minimize";
import {BackButtonProvider} from "../providers/back-button/back-button";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RainbowPage
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RainbowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    BrowserTab,
    AppMinimize,
    BackButtonProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
