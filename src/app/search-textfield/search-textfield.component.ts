import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-textfield',
  templateUrl: './search-textfield.component.html',
  styleUrls: ['./search-textfield.component.scss']
})
export class SearchTextfieldComponent {
  @Output() valueChange = new EventEmitter<string>();
  debouncer: Subject<string> = new Subject<string>();

  constructor() {
    // Only emits values when typing stops for atleast 100ms.
    this.debouncer.pipe(debounceTime(100)).subscribe((value) => this.valueChange.emit(value));
  }

  onChange(value: string) {
    this.debouncer.next(value);
  }

}
