import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { CreateUserDTO } from '../../Core/Application/DTOs/Input/CreateUserDTO';
import { UserService } from '../../services/ApiServices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ){
  }

  onSubmit(){
    var userDTO = new CreateUserDTO();
    userDTO.firstName = this.registerForm.value.firstName ?? "";
    userDTO.lastName = this.registerForm.value.lastName ?? "";
    userDTO.email = this.registerForm.value.email ?? "";
    userDTO.password = this.registerForm.value.password ?? "";

    this.userService.registerNewUser(userDTO)
    .then(response =>{
      console.log(response.data);
      this.route.navigateByUrl('signin');
    })
    .catch(error =>{
      console.log(error);
    });
  }
}
