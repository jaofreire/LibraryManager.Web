import { Injectable } from '@angular/core';
import  axios, { Axios }  from 'axios'
import { Observable, from } from 'rxjs';
import { ViewBooksModel } from '../../Core/Domain/Models/view-books-model';
import qs from 'qs';
import { CreateUserDTO } from '../../Core/Application/DTOs/Input/CreateUserDTO';
import { ViewValidateCredentialsDTO } from '../../Core/Application/DTOs/Output/ViewValidateCredentialsDTO';
import { ValidateCredentialsDTO } from '../../Core/Application/DTOs/Input/ValidateCredentialsDTO';

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

  createToken(requestData: ViewValidateCredentialsDTO){
    return this.axiosInstance.post("/token", requestData);
  }

  registerUser(requestData: CreateUserDTO){
    return this.axiosInstance.post("/user", requestData)
  }

  validateCredentials(requestData: ValidateCredentialsDTO){
    return this.axiosInstance.get("/validateCredentials",
      {
        params:{
          Name: requestData.name,
          Email: requestData.email,
          Password: requestData.password
        }
      }
    )

  }



}
