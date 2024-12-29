import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


import { Pokemon } from './models/pokemon';

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

  getPokemonInfo(p: Pokemon): Observable<Object> {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
  }

}
