import { Component } from '@angular/core';
import {
  Books,
  Category,
} from './components/first-component/first-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Book Shop';

  public books: Books[] = [
    {
      name: 'Book Title 1',
      description: 'Description of the book 1',
      price: 123,
      category: Category.Arts,
      isAvailable: true,
    },
    {
      name: 'Book Title 2',
      description: 'Description of the book 2',
      price: 453,
      category: Category.Biographies,
      isAvailable: false,
    },
    {
      name: 'Book Title 3',
      description: 'Description of the book 3',
      price: 456,
      category: Category.Business,
      isAvailable: true,
    },
  ];
}
