import { Component } from '@angular/core';
import { LibraryManagerApiServiceService } from '../../services/library-manager-api-service.service';
import { ViewBooksModel } from '../../Models/view-books-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styles: ``
})
export class ListBooksComponent {

  allBooks: ViewBooksModel[] = [];

  constructor(public libraryManagerApiService: LibraryManagerApiServiceService){
    this.libraryManagerApiService.getAllBooks()
    .then(response =>{
      this.allBooks = response.data.map((item: any) => new ViewBooksModel(item));
      console.log(this.allBooks[0])
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
    

  }

  

}
