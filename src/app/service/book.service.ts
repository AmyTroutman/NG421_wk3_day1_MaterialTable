import { Injectable } from '@angular/core';
import {Books} from '../data/book-data';
import {IBook} from '../interface/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  catalog: IBook[];

  constructor() {
    this.catalog = Books;
   }

   getBooks(): IBook[] {
     return this.catalog;
   }
}
