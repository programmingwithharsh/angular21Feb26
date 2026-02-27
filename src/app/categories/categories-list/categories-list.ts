import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from '../store';
import { selectAllCategories, selectCategoryLoading } from '../store';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.scss',
})
export class CategoriesList implements OnInit {

  categories$;
  loading$;

  constructor(private store: Store) {
    this.categories$ = this.store.select(selectAllCategories);
    this.loading$ = this.store.select(selectCategoryLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories()); // calling action
  }
}
