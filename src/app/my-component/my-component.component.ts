import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
  id: string = '';

  filterKey: string = '';

  pokemons: Pokemon[] = [];

  api: PokeapiService;

  choice: any;

  constructor(api: PokeapiService) {
    this.api = api;
  }

  ngOnInit(): void {
    this.api.getPokemons().subscribe(resp => {
      let key = "results" as keyof Object;
      let fetchedPokemons = (resp[key]) as Object as Object[];

      let ps: Pokemon[] = [];

      fetchedPokemons.map((obj, i) => {
        let name = "name" as keyof Object;
        let nameValue = obj[name] as Object;
        return ps.push(new Pokemon(i, nameValue as String));
      });

      this.pokemons = ps;
    })
  }

  go() {
    if (this.choice === undefined) return

    this.api.getPokemonInfo(this.choice).subscribe(resp => {
      if (this.choice === undefined) {
        alert("You need to select a pokemon !")
      }
      this.choice.info = resp
    })
  }

}
