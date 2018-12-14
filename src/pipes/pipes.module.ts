import { NgModule } from '@angular/core';
import { TestpipePipe } from './testpipe/testpipe';
import { UinImgPipe } from './uin-img/uin-img';
@NgModule({
	declarations: [TestpipePipe,
    UinImgPipe],
	imports: [],
	exports: [TestpipePipe,
    UinImgPipe]
})
export class PipesModule {}
