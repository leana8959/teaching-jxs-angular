import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInput } from './pokemon-input.component';

describe('MyComponentComponent', () => {
  let component: PokemonInput;
  let fixture: ComponentFixture<PokemonInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
