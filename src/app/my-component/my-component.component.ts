import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
  id: string = '';
  pokemons: Array<Pokemon> = [
    new Pokemon(1, "foo"),
    new Pokemon(2, "bar"),
    new Pokemon(3, "baz"),
  ]
}
