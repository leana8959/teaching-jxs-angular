import { Component } from '@angular/core';
import { Pokemon, PokemonJSON } from '../models/pokemon';
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

  choice: Pokemon | undefined;

  constructor(api: PokeapiService) {
    this.api = api;
  }

  ngOnInit(): void {
    this.api.getPokemons().subscribe(resp => {
      let pokemonApiResult = resp as PokemonJSON

      this.pokemons = pokemonApiResult.results.map((obj, i) => {
        return new Pokemon(i, obj.name);
      });

    })
  }

  go() {
    if (this.choice === undefined) return

    this.api.getPokemonInfo(this.choice).subscribe(resp => {
      if (this.choice === undefined) {
        alert("You need to select a pokemon !")
        return
      }
      this.choice.info = resp
    })
  }

}
