export class Pokemon {
  id: Number;
  name: String;
  info: Object | undefined;

  constructor(id: Number, name: String) {
    this.id = id;
    this.name = name;
  }
}
