import { Pokemon } from './models/pokemonn';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon()).toBeTruthy();
  });
});
