import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from "../../classes/book";
import {GenderEnum} from "../../enums/gender.enum";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  @Output() saveBook = new EventEmitter();
  public newBook : Book = new Book();
  public readonly GENDER = GenderEnum;
  constructor() { }

  ngOnInit(): void {
  }

  saveBookFn(): void {
    this.saveBook.emit(this.newBook);
    this.newBook = new Book();
  }

}
