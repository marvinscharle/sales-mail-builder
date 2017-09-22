import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'linebreak', pure: true})
export class LinebreakToBrPipe implements PipeTransform {
  public transform(value: string): string {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
}
