import { NgModule } from '@angular/core';
import { TestpipePipe } from './testpipe/testpipe';
@NgModule({
	declarations: [TestpipePipe],
	imports: [],
	exports: [TestpipePipe]
})
export class PipesModule {}
