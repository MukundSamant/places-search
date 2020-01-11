import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'undefinedLocationHandler'
})
export class UndefinedLocationHandlerPipe implements PipeTransform {

  /**
   * Takes location data points as input and retunr NA if not defined.
   * Else returns the value as it is.
   */
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return 'NA';
    }
    return value;
  }

}
