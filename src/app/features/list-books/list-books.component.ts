import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ViewBooksModel } from '../../Models/view-books-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})

export class ListBooksComponent {

  allBooks: ViewBooksModel[] = [];

  constructor(private booksService: BooksService){
  }

  ngOnInit(){
    this.booksService.getAll()
    .then(response =>{
      this.allBooks = response.data.map((item: any) => new ViewBooksModel(item));
      console.log(response.data);
    })
    .catch(error =>{
      console.log(error);
    })

  }

}
