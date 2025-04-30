import { Food } from './food.model';

describe('Food', () => {
  it('should create an instance', () => {
    expect(new Food('Ice cream', 125, 67, 'icecream.jpg')).toBeTruthy();
  });
});
