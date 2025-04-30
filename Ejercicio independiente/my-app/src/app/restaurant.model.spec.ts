import { Restaurant } from './restaurant.model';

describe('Restaurante', () => {
  it('should create an instance', () => {
    expect(new Restaurant('Agarrini la palini', 10000)).toBeTruthy();
  });
});
