import { NgModule } from '@angular/core';
import { QqEmotionComponent } from './qq-emotion/qq-emotion';
import { QzoneEmotionComponent } from './qzone-emotion/qzone-emotion';
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
	declarations: [QqEmotionComponent,
    QzoneEmotionComponent],
	imports: [BrowserModule],
	exports: [QqEmotionComponent,
    QzoneEmotionComponent],
  entryComponents: [
    QzoneEmotionComponent,
  ]
})
export class ComponentsModule {}
