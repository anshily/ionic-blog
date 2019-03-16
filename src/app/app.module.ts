import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import {MarkdownModule} from "ngx-markdown";
import {RainbowPage} from "../pages/rainbow/rainbow";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {BrowserTab} from "@ionic-native/browser-tab";
import {AppMinimize} from "@ionic-native/app-minimize";
import {BackButtonProvider} from "../providers/back-button/back-button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ParseHtmlProvider } from '../providers/parse-html/parse-html';
import {ComponentsModule} from "../components/components.module";
import { SweetNetProvider } from '../providers/sweet-net/sweet-net';
import { QzoneImageDealProvider } from '../providers/qzone-image-deal/qzone-image-deal';
import {PreviewImagePage} from "../pages/preview-image/preview-image";
import {TestpipePipe} from "../pipes/testpipe/testpipe";

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: SweetNetProvider, multi: true},
  // { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true}
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RainbowPage,
    PreviewImagePage,
    TestpipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    // MarkdownModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RainbowPage,
    PreviewImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    BrowserTab,
    AppMinimize,
    BackButtonProvider,
    // HttpClient
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParseHtmlProvider,
    // ...INTERCEPTOR_PROVIDES,
    QzoneImageDealProvider
  ]
})
export class AppModule {}
