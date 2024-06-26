import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListBooksComponent } from './features/list-books/list-books.component';
import { ReactiveFormsModule } from '@angular/forms'
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { ListBooksFilterComponent } from './features/list-books-filter/list-books-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ListBooksComponent,
    // SearchBarComponent,
    // ListBooksFilterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'LibraryManager.Web';
}
