import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ViewBooksModel } from '../../Models/view-books-model';
import { BooksService } from '../../services/books.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-list-books-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  templateUrl: '../list-books/list-books.component.html',
  styleUrls: ['../list-books/list-books.component.scss']
})

export class ListBooksFilterComponent {

  allBooks: ViewBooksModel[] = [];

  constructor(private booksSevice: BooksService){
  }

  ngOnInit(){
    this.allBooks = this.booksSevice.allBooksFetcheds;
  }


}
