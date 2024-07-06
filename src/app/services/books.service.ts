import { Injectable } from '@angular/core';
import { LibraryManagerApiService } from './library-manager-api-service.service';
import { ViewBooksModel } from '../Models/view-books-model';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  allBooksFetcheds: ViewBooksModel[] = [];
  searchInputString: string = '';

  constructor(private libraryApiService: LibraryManagerApiService){
  }

  getAll(){
    return this.libraryApiService.getAllBooks()
  }

  getByName(name: string){
    return this.libraryApiService.getBooksByName(name)
  }

  getByCategory(category: string){
    return this.libraryApiService.getBooksByCategory(category)
  }

  getByCategories(categoriesList: string[]){
    return this.libraryApiService.getBooksByCategories(categoriesList);
  }


}
