import { Injectable } from '@angular/core';
import  axios  from 'axios'
import { Observable, from } from 'rxjs';
import { ViewBooksModel } from '../Models/view-books-model';

@Injectable({
  providedIn: 'root'
})
export class LibraryManagerApiService{

  constructor() { }

  getAllBooks(){
    return axios.get("https://localhost:8081/book")
  }

  getBooksByName(name: string){
    return axios.get("https://localhost:8081/book/name/" + name)
  }

  getBooksByCategory(category: string){
    return axios.get("https://localhost:8081/book/category/" + category)
  }

  getUserValidateCredentials(id: number){
    return axios.get("https://localhost:8081/validateCredentials/" + id)
  }

}
