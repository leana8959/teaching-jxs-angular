import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(pokemons: Pokemon[], searchString?: string): Pokemon[] {
    if (typeof searchString == 'undefined') {
      return pokemons;
    }

    return pokemons.filter(p => !p.name.toLowerCase().indexOf(searchString));
  }

}
