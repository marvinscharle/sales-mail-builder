import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'replaceFragments', pure: false})
export class ReplaceFragmentsPipe implements PipeTransform {
  private latestValue: string = '';
  private latestFragments: string = '';
  private latestReturn: string = '';

  public transform(value: string, fragments: { [key: string]: string } = {}): string {
    const serializedFragments = JSON.stringify(fragments);

    if (this.latestFragments === serializedFragments && this.latestValue === value) {
      return this.latestReturn;
    }

    this.latestFragments = serializedFragments;
    this.latestValue = value;

    Object.keys(fragments).forEach(fragment => {
      if (fragments[fragment] !== '') {
        value = value.replace(new RegExp(`{{${fragment}}}`, 'g'), fragments[fragment]);
      }
    });

    this.latestReturn = value;
    return value;
  }
}
