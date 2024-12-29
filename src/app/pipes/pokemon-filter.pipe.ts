import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'filterPokemon'
})
export class PokemonFilterPipe implements PipeTransform {

  transform = (pokemons: Pokemon[], searchString: string) =>
    pokemons.filter(p =>
      !p.name.toLowerCase().indexOf(searchString)
    );

}
