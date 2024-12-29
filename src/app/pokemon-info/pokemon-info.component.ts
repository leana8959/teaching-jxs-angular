import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.scss'
})
export class PokemonInfo {
  @Input() info: any = undefined
}
