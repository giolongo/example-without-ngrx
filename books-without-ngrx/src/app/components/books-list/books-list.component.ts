import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {Book} from "../../classes/book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnChanges {

  @Input() books: Book[];
  constructor() { }

  ngOnChanges(): void {
  }

}
