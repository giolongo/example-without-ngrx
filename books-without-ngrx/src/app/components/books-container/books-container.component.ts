import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Book} from "../../classes/book";
import {max} from "rxjs/operators";

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {

  public books: Book[] = [];

  constructor(private restService: RestService) {
    this.getBooks();
  }

  ngOnInit(): void {
  }

  public remove(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  public getBooks(): void {
    this.restService.get().subscribe(books => this.books = books);
  }

  public saveBook(book: Book): void {
    const ids = this.books.map(book => book.id);
    const maxId = ids.reduce((a, b) => Math.max(a, b));
    book.id = maxId + 1
    this.books.push(book);
  }

}
