import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle'
})
export class CustomTitlePipe implements PipeTransform {

  transform(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1).toLocaleLowerCase();
   }

}
