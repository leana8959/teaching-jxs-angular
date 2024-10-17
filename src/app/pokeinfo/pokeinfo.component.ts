import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrl: './pokeinfo.component.scss'
})
export class PokeinfoComponent {
  @Input() info: any = undefined
}
