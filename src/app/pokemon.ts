export class Pokemon {
  id: Number;
  name: String;
  info: Object;

  constructor(id: Number, name: String, info: Object) {
    this.id = id;
    this.name = name;
    this.info = info;
  }
}
