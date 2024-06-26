import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { LibraryManagerApiService } from '../../../services/library-manager-api-service.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'



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

  constructor(private libraryApiService: LibraryManagerApiService){
  }

  onSubmitSearch(){
    this.libraryApiService.getBooksByName(this.SearchForm.value.searchInputName ?? "")
    .then(response =>{
      console.log(response.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }





}
