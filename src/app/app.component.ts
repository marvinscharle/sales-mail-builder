import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as uuid from 'uuid';
import {FragmentsService} from './service/fragments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public buildingBlockId$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public body$: BehaviorSubject<string> = new BehaviorSubject('');

  public fragments: FragmentsService;

  public constructor(fragments: FragmentsService) {
    this.fragments = fragments;
  }

  public ngOnInit(): void {
    this.buildingBlockId$.next(JSON.parse(localStorage.getItem('building-blocks') || '[]'));
  }

  public add(): void {
    const newBlock = uuid();
    const currentBlocks = this.buildingBlockId$.getValue();
    currentBlocks.push(newBlock);
    localStorage.setItem(`building-block-${newBlock}`, '');
    this.buildingBlockId$.next(currentBlocks);
    localStorage.setItem('building-blocks', JSON.stringify(currentBlocks));
  }

  public remove(index: number): void {
    const currentBlocks = this.buildingBlockId$.getValue();
    const deleted = currentBlocks.splice(index, 1);

    // Remove existing item
    if (deleted[0]) {
      localStorage.removeItem(`building-block-${deleted[0]}`);
    }

    this.buildingBlockId$.next(currentBlocks);
    localStorage.setItem('building-blocks', JSON.stringify(currentBlocks));
  }

  public append(block: string): void {
    let currentBody = this.body$.getValue();
    if (currentBody === '') {
      currentBody = `${block}`;
    } else {
      currentBody = `${currentBody}\n\n${block}`;
    }
    this.body$.next(currentBody);
  }
}
