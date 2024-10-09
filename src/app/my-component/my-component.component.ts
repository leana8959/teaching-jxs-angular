import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
  id: string = '';

  filterKey: string = '';

  pokemons: Pokemon[] = [];

  api: PokeapiService;

  choice: Pokemon | undefined = undefined;

  constructor(api: PokeapiService) {
    this.api = api;
    api.getPokemons().then(ps => this.pokemons = ps);
  }

  go() {
    console.log(`The value of id is ${this.choice?.id}`)
  }
}
