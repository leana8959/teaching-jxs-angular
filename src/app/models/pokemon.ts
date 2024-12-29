export interface PokemonJSON {
  count: number;
  next: null;
  previous: null;
  results: ResultJSON[];
}

export interface ResultJSON {
  name: string;
  url: string;
}

export class Pokemon {
  id: Number;
  name: String;

  constructor(id: Number, name: String) {
    this.id = id;
    this.name = name;
  }
}
