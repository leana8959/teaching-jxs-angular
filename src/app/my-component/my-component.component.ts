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

  choice: any;

  JSON: JSON;

  constructor(api: PokeapiService) {
    this.JSON = JSON;
    this.api = api;
    api.getPokemons().then(ps => this.pokemons = ps);
  }

  go() {
    if (this.choice === undefined) return

    this.api.getPokemonInfo(this.choice).then(info => {
      if (this.choice === undefined) return

      this.choice.info = info
      console.log(`The value of id is ${this.choice.id}`)
      console.log(this.choice.info)
    })
  }

}
