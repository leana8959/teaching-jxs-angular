import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';


import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private httpClient: HttpClient = inject(HttpClient);

  async getPokemons(): Promise<Pokemon[]> {
    return firstValueFrom(
      this
        .httpClient
        .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    ).then<Pokemon[]>(
      resp => {
        let key = "results" as keyof Object;
        let fetchedPokemons = (resp[key]) as Object as Object[];

        let ps: Pokemon[] = [];

        fetchedPokemons.map((obj, i) => {
          let name = "name" as keyof Object;
          let nameValue = obj[name] as Object;
          return ps.push(new Pokemon(i, nameValue as String));
        })
        return ps;
      }
    )

  }
}
