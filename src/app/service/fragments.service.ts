import {Injectable} from '@angular/core';

@Injectable()
export class FragmentsService {
  public placeholders: {salutation: string, lastName: string} = {
    salutation: 'Frau',
    lastName: ''
  };
}
