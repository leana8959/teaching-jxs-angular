import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonInfoResponse, PokemonName, PokemonsResponse } from '../models/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonsResponse> {
    return this
      .http
      .get<PokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  }

  getPokemonInfo(name: PokemonName): Observable<PokemonInfoResponse> {
    return this
      .http
      .get<PokemonInfoResponse>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
