import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonInfoResponse, PokemonName, PokemonsResponse } from '../models/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private httpClient: HttpClient = inject(HttpClient);

  getPokemons(): Observable<PokemonsResponse> {
    return this
      .httpClient
      .get<PokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  }

  getPokemonInfo(name: PokemonName): Observable<PokemonInfoResponse> {
    return this
      .httpClient
      .get<PokemonInfoResponse>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
