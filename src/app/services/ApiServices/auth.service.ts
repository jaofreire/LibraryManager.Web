import { Injectable } from '@angular/core';
import { LibraryManagerApiService } from './library-manager-api-service.service';
import { ViewValidateCredentialsDTO } from '../../Core/Application/DTOs/Output/ViewValidateCredentialsDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private libraryApiService: LibraryManagerApiService) {
   }

   generateToken(requestData: ViewValidateCredentialsDTO){
    return this.libraryApiService.createToken(requestData);
   }
}
