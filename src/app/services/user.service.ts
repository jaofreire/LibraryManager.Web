import { Injectable } from '@angular/core';
import { LibraryManagerApiService } from './library-manager-api-service.service';
import { CreateUserDTO } from '../Core/Application/DTOs/Input/CreateUserDTO';
import { ValidateCredentialsDTO } from '../Core/Application/DTOs/Input/ValidateCredentialsDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private libraryApiService: LibraryManagerApiService) { 

  }

  registerNewUser(requestData: CreateUserDTO){
    return this.libraryApiService.registerUser(requestData)
  }

  loginUser(requestData: ValidateCredentialsDTO){
    return this.libraryApiService.validateCredentials(requestData);
  }
}
