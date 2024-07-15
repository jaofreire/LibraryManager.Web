import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ViewBooksModel } from '../../Models/view-books-model';
import { BooksService } from '../../services/books.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  templateUrl: '../list-books/list-books.component.html',
  styleUrls: ['../list-books/list-books.component.scss']
})

export class ListBooksFilterComponent {

  allBooks: ViewBooksModel[] = [];
  avaliableCategories: string[] = [];
  checkedCategoriesFilter: string[] = [];
  checkbox: boolean = false;

  constructor(public booksService: BooksService,
    private route: Router
  ){
  }

  ngOnInit(){
    this.allBooks = this.booksService.allBooksFetcheds;

    this.fetchAvalibleCategories();
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
    .then( async response =>{
      this.booksService.allBooksFetcheds = response.data.map((items: any) => new ViewBooksModel(items))
      await this.refreshComponent();
      console.log(response.request);
    })
    .catch(error =>{
      console.log(error);
    });
    
  }

  async refreshComponent(){
    await this.route.navigateByUrl('/books', {skipLocationChange: true});
    await this.route.navigateByUrl('/books/filter');
    }
  


}
