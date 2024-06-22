import { Injectable } from '@angular/core';
import axios from 'axios'
import { Observable, from } from 'rxjs';
import { ViewBooksModel } from '../Models/view-books-model';

@Injectable({
  providedIn: 'root'
})
export class LibraryManagerApiServiceService {

  constructor() { }

  getAllBooks(){
    return axios.get("https://localhost:7231/book")
  }

  getUserValidateCredentials(id: number){
    return axios.get("https://localhost:7231/validateCredentials/" + id)
  }

}
