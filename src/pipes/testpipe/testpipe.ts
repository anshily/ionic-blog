import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TestpipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'testpipe',
})
export class TestpipePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    // return value.toLowerCase();
    return ROOT_URL + '/sys/picture?url='+ encodeURIComponent(value);
  }
}
