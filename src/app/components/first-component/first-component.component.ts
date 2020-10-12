import { Component, Input, OnInit } from '@angular/core';

export interface Books {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export enum Category {
  Arts = 'ARTS',
  Biographies = 'BIOGRAPHIES',
  Business = 'BUSINESS',
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  @Input() books: Books[] = [];

  constructor() {}

  ngOnInit(): void {}
}
