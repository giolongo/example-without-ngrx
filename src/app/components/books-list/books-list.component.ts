import {ChangeDetectionStrategy, Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Book} from "../../classes/book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnChanges {

  @Input() books: Book[];
  @Output() remove = new EventEmitter<number>()
  @Output() refresh = new EventEmitter()
  constructor() { }

  ngOnChanges(): void {
  }

}
