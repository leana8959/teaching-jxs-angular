import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonName } from '../models/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private httpClient: HttpClient = inject(HttpClient);

  getPokemons(): Observable<any> {
    return this
      .httpClient
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  }

  getPokemonInfo(name: PokemonName): Observable<Object> {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
