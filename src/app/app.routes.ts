import { Routes } from '@angular/router';
import { ListBooksComponent } from './features/list-books/list-books.component';
import { ListBooksFilterComponent } from './features/list-books-filter/list-books-filter.component';


export const routes: Routes = [
    {path: 'books', component: ListBooksComponent},
    {path: 'books/filter', component: ListBooksFilterComponent}
];
