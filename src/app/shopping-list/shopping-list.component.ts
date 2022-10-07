import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: Ingredient[] = [
    new Ingredient('Bacon', 2),
    new Ingredient('Egg', 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
