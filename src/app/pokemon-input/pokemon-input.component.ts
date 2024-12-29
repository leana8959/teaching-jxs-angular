import { Component } from '@angular/core';
import { Pokemon, PokemonJSON } from '../models/pokemon';
import { Observable, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { PokeapiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './pokemon-input.component.html',
  styleUrl: './pokemon-input.component.scss'
})
export class PokemonInput {
  pokemons$: Observable<Pokemon[]>;
  pokemonInfo$: Observable<Object>;

  pokemonForm: FormGroup;
  choiceCtl: FormControl<Pokemon>;
  filterKeyCtl: FormControl<string>;

  constructor(private api: PokeapiService) {
    this.pokemons$ = this
      .api.getPokemons()
      .pipe<Pokemon[]>(
        map<PokemonJSON, Pokemon[]>(resp =>
          resp.results.map((obj, i) => new Pokemon(i, obj.name))
        )
      );
    this.pokemonInfo$ = new Observable();

    this.choiceCtl = new FormControl();
    this.filterKeyCtl = new FormControl('', { nonNullable: true });
    this.pokemonForm = new FormGroup({
      choice: this.choiceCtl,
      filterKey: this.filterKeyCtl,
    });
  }

  updateInfoSubscription() {
    this.pokemonInfo$ = this.api.getPokemonInfo(this.choiceCtl.value);
  }

}
