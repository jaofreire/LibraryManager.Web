import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ViewBooksModel } from '../../Models/view-books-model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: '../list-books/list-books.component.html',
  styleUrls: ['../list-books/list-books.component.scss']
})

export class ListBooksFilterComponent {

  allBooks: ViewBooksModel[] = [];

  constructor(private booksSevice: BooksService){
    this.allBooks = this.booksSevice.allBooksFetcheds;
  }


}
