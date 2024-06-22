import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListBooksComponent } from './features/list-books/list-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, ListBooksComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'LibraryManager.Web';
}
