import { Injectable } from '@angular/core';
import  axios, { Axios }  from 'axios'
import { Observable, from } from 'rxjs';
import { ViewBooksModel } from '../Models/view-books-model';
import qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class LibraryManagerApiService{

  axiosInstance : Axios = axios.create({
    baseURL: "https://localhost:8081/"
  });

  constructor() { }

  getAllBooks(){
    return this.axiosInstance.get("/book")
  }

  getBooksByName(name: string){
    return this.axiosInstance.get("/book/name/" + name)
  }

  getBooksByCategory(category: string){
    return this.axiosInstance.get("/book/category/" + category)
  }

  getBooksByCategories(categoriesListParam: string[]){
    return this.axiosInstance.get("/book/categories",{
      params: {
        categoriesList: categoriesListParam
      },
      paramsSerializer: params =>{
        return qs.stringify(params);
      }
    })
  }


}
