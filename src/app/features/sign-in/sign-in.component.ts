import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { CreateUserDTO } from '../../Core/Application/DTOs/Input/CreateUserDTO';
import { UserService } from '../../services/ApiServices/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/ApiServices/auth.service';
import { ValidateCredentialsDTO } from '../../Core/Application/DTOs/Input/ValidateCredentialsDTO';
import { ApiResponse } from '../../Core/Application/DTOs/Responses/api-response';
import { ViewValidateCredentialsDTO } from '../../Core/Application/DTOs/Output/ViewValidateCredentialsDTO';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private userService: UserService,
    private authService: AuthService
  ){

  }

  onSubmit(){
    var validateDTO = new ValidateCredentialsDTO(
      this.loginForm.value.name ?? "",
      this.loginForm.value.email ?? "",
      this.loginForm.value.password ?? ""
    )

    this.userService.loginUser(validateDTO)
    .then(response =>{
      var apiResponse: ApiResponse<ViewValidateCredentialsDTO> = response.data;

      var viewValidateDTO = new ViewValidateCredentialsDTO(
        apiResponse.dataResponse?.id,
        apiResponse.dataResponse?.firstName + " " + apiResponse.dataResponse?.lastName,
        apiResponse.dataResponse?.email,
        apiResponse.dataResponse?.role
      );

      this.authService.generateToken(viewValidateDTO);
    })
    .catch(error =>{
      console.log(error);
    });
    
  }

}
