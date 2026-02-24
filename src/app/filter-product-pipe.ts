import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct',
  pure: false // default
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value);
    // console.log(args);
    return value;
  }

}
