import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ViewBooksModel } from '../../Core/Domain/Models/view-books-model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})

export class ListBooksComponent {

  allBooks: ViewBooksModel[] = [];
  avaliableCategories: string[] = [];
  checkedCategoriesFilter: string[] = [];
  checkbox: boolean = false;
  
  constructor(public booksService: BooksService,
     private route: Router){
  }

  ngOnInit(){
    this.booksService.getAll()
    .then(response =>{
      this.allBooks = response.data.map((item: any) => new ViewBooksModel(item))
      console.log(response.data);

      this.fetchAvalibleCategories();
      
    })
    .catch(error =>{
      console.log(error);
    });
 
  }

  fetchAvalibleCategories(){

    this.allBooks.forEach(books =>{
      if(!this.avaliableCategories.includes(books.category)){
        this.avaliableCategories.push(books.category);
      }

    })

  }

  changeCheckBoxState(category: string){

    if(this.checkedCategoriesFilter.includes(category)){
     return this.removeCategorieUnchecked(category);
    }
    return this.addCategorieChecked(category);

  }

  addCategorieChecked(category: string){
    this.checkedCategoriesFilter.push(category);
    console.log(this.checkedCategoriesFilter);

  }

  removeCategorieUnchecked(category: string){

    if(this.checkedCategoriesFilter.includes(category)){
     var categoryIndex = this.checkedCategoriesFilter.indexOf(category);
     this.checkedCategoriesFilter.splice(categoryIndex);
     console.log(this.checkedCategoriesFilter);

    }
       
  }

  applyFilter(){
    this.booksService.getByCategories(this.checkedCategoriesFilter)
    .then(async response =>{
      this.booksService.allBooksFetcheds = response.data.map((items: any) => new ViewBooksModel(items))
      console.log(response.data);
      console.log(response.request);
      this.route.navigateByUrl('/books/filter');
    })
    .catch(error =>{
      console.log(error);
    });
  }


}
