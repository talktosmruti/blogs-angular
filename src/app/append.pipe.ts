import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('inside append pipe '+args)
    return value + args;
  }

}
