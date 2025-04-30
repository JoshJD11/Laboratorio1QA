import { Entree } from './entree.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Entree', () => {
  it('should create an instance', () => {
    expect(new Entree('Any', new SortedListOfImmutables(null))).toBeTruthy();
  });
});

