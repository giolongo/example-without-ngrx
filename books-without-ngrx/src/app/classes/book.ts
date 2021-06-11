import {Person} from "./person";

export class Book {
  title: string;
  author: Person;
  pages: number;

  constructor() {
    this.title = null;
    this.author = null;
    this.pages = null;
  }
}
