import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
  pure: true // default
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value);
    // console.log(args);
    return value.replace(args[0], " ");
  }

}
