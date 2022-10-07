import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a description', 'https://www.penaestrada.blog.br/wp-content/uploads/2020/12/IMG_9595.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
