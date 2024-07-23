import { Routes } from '@angular/router';
import { ListBooksComponent } from './features/list-books/list-books.component';
import { ListBooksFilterComponent } from './features/list-books-filter/list-books-filter.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { SignInComponent } from './features/sign-in/sign-in.component';


export const routes: Routes = [
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
    {path: 'signup', component: SignUpComponent},
    {path: 'signin', component: SignInComponent},
    // {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', component: ListBooksComponent},
    {path: 'books/filter', component: ListBooksFilterComponent}
];
