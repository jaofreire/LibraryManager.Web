import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'
import { ViewBooksModel } from '../../../Models/view-books-model';
import { Router } from '@angular/router';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {

  SearchForm = new FormGroup({
    searchInputName: new FormControl('')
  });

  allBooks: ViewBooksModel[] = [];

  constructor( private route: Router,
    private booksService: BooksService
  )
  {
  }

  onSubmitSearch(){
    this.booksService.getByName(this.SearchForm.value.searchInputName ?? '')
    .then(async response =>{
      this.allBooks = response.data.map((item: any) => new ViewBooksModel(item));
      this.booksService.allBooksFetcheds = this.allBooks;

      await this.refreshComponent();
      console.log(response.data);
    })
    .catch(error =>{
      console.log(error);
    });

  }

 async refreshComponent(){
   await this.route.navigateByUrl('/books', {skipLocationChange: true});
   await this.route.navigateByUrl('/books/filter');
  }


}
