import { Pipe, PipeTransform } from '@angular/core';
import { PokemonName } from '../models/pokemons';

@Pipe({
  name: 'filterPokemon'
})
export class PokemonFilterPipe implements PipeTransform {

  transform = (pokemons: PokemonName[], searchString: string) =>
    pokemons.filter(name =>
      !name.toLowerCase().indexOf(searchString)
    );

}
