import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {FragmentsService} from '../service/fragments.service';

@Component({
  selector: 'mail-building-block',
  templateUrl: './building-block.html'
})

export class BuildingBlockComponent implements OnChanges {
  @Input() public id: string;
  @Output() public remove: EventEmitter<void> = new EventEmitter<void>();
  @Output() public insert: EventEmitter<string> = new EventEmitter<string>();
  public body$: BehaviorSubject<string> = new BehaviorSubject('');
  public editMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public fragments: FragmentsService;

  public get text(): string {
    return this.body$.value;
  }

  public set text(to: string) {
    this.body$.next(to);
    localStorage.setItem(`building-block-${this.id}`, to);
  }

  public constructor(fragments: FragmentsService) {
    this.fragments = fragments;
  }

  public ngOnChanges(): void {
    const text = localStorage.getItem(`building-block-${this.id}`);
    this.body$.next(text);
  }

  public toggleEdit(): void {
    this.editMode$.next(!this.editMode$.getValue());
  }

  public triggerInsert(): void {
    const body = this.body$.getValue();
    this.insert.next(body);
  }
}
