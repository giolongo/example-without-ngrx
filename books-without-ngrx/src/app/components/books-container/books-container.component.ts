import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {

  public books$ = this.restService.get();
  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

}
