// quicktype generated
// the endpoint listing pokemons
export interface PokemonsResponse {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
// quicktype generated

export class Pokemon {
  id: Number;
  name: String;

  constructor(id: Number, name: String) {
    this.id = id;
    this.name = name;
  }
}
