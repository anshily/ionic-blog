import { NgModule } from '@angular/core';
import { QqEmotionComponent } from './qq-emotion/qq-emotion';
import { QzoneEmotionComponent } from './qzone-emotion/qzone-emotion';
import {BrowserModule} from "@angular/platform-browser";
import { SwLoadingComponent } from './sw-loading/sw-loading';
@NgModule({
	declarations: [QqEmotionComponent,
    QzoneEmotionComponent,
    SwLoadingComponent],
	imports: [BrowserModule],
	exports: [QqEmotionComponent,
    QzoneEmotionComponent,
    SwLoadingComponent],
  entryComponents: [
    QzoneEmotionComponent,
    SwLoadingComponent
  ]
})
export class ComponentsModule {}
