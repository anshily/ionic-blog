import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RainbowPage } from './rainbow';

@NgModule({
  declarations: [
    RainbowPage,
  ],
  imports: [
    IonicPageModule.forChild(RainbowPage),
  ],
})
export class RainbowPageModule {}
