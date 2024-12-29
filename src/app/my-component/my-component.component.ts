import { Component } from '@angular/core';
import { Pokemon, PokemonJSON } from '../models/pokemon';
import { PokeapiService } from '../pokeapi.service';
import { Observable, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
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

    this.choiceCtl = new FormControl();
    this.filterKeyCtl = new FormControl('', { nonNullable: true });
    this.pokemonForm = new FormGroup({
      choice: this.choiceCtl,
      filterKey: this.filterKeyCtl,
    });

    this.pokemonInfo$ = new Observable();
  }

  updateInfoSubscription() {
    this.pokemonInfo$ = this.api.getPokemonInfo(this.choiceCtl.value);
  }

}
