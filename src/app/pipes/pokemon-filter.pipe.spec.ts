import { PokemonFilterPipe } from "./pokemon-filter.pipe";

describe('FilterPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
