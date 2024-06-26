import { Component } from '@angular/core';
import { LibraryManagerApiService } from '../../services/library-manager-api-service.service';
import { ViewBooksModel } from '../../Models/view-books-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, TooltipModule],
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})

export class ListBooksComponent {

  allBooks: ViewBooksModel[] = [];

  constructor(private libraryManagerApiService: LibraryManagerApiService){

    this.libraryManagerApiService.getAllBooks()
    .then(response =>{
      this.allBooks = response.data.map((item: any) => new ViewBooksModel(item));
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
    
  }


}
