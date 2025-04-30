import { SortedListOfImmutables } from './sorted-list-of-immutables.model';
import { Item } from './Item';
import { Listable } from './listable';

describe('SortedListOfImmutables', () => {
  it('should create an instance', () => {
    expect(new SortedListOfImmutables(null)).toBeTruthy();
  });
});

/*

  Test name: checkIfItemInList1
  Goal: Check if an Item is in a SortedListOfImmutables
  Test cases: [["Banana", 0.50, 1.00]]
  Expected result: true

 */

describe('checkIfItemInList1', () => {
  let targetList: SortedListOfImmutables;
  let item: Listable;

  beforeEach(() => {
    targetList = new SortedListOfImmutables(null);
    item = new Item("Banana", 0.50, 1.00);
    targetList.add(item);
  });

  it('Should search for the Item {"Banana", 0.50, 1.00} and return true', () => {
    expect(targetList.checkAvailability(item)).toBe(true); 
  });
});



/*

  Test name: checkIfItemInList2
  Goal: Check if an Item is in a SortedListOfImmutables
  Test cases: [["Banana", 0.50, 1.00]]
  Expected result: false

 */

describe('checkIfItemInList2', () => {
  let targetList: SortedListOfImmutables;
  let item: Listable;

  beforeEach(() => {
    targetList = new SortedListOfImmutables(null);
    item = new Item("Banana", 0.50, 1.00);
  });

  it('Should search for the Item {"Banana", 0.50, 1.00} and return false', () => {
    expect(targetList.checkAvailability(item)).toBe(false); 
  });
});


/*

  Test name: RemoveItemFromSortedListOfImmutables1
  Goal: Remove an item from a SortedListOfImmutables
  Test cases: [["Banana", 0.50, 1.00]]
  Expected result: false

 */


describe('RemoveItemFromSortedListOfImmutables1', () => {
  let targetList:SortedListOfImmutables;
  let item:Listable;

  beforeEach(() => {
    targetList = new SortedListOfImmutables(null);
    item = new Item("Banana", 0.50, 1.00);
    targetList.add(item);
  });

  it('Should remove the item {"Banana", 0.50, 1.00} from the List', () => {
    targetList.remove(item);
    expect(targetList.checkAvailability(item)).toBeFalsy();
  });
});



/*

  Test name: RemoveItemFromSortedListOfImmutables2
  Goal: Remove an item from a SortedListOfImmutables and check if teh function didn't delete the rest of the elements
  Test cases: [[{"Banana", 0.50, 1.00}, {"Apple", 0.30, 2.00}]]
  Expected result: true

 */


  describe('RemoveItemFromSortedListOfImmutables2', () => {
    let targetList:SortedListOfImmutables;
    let item1:Listable;
    let item2:Listable;
  
    beforeEach(() => {
      targetList = new SortedListOfImmutables(null);
      item1 = new Item("Banana", 0.50, 1.00);
      item2 = new Item("Apple", 0.30, 2.00);
      targetList.add(item1);
      targetList.add(item2);
    });
  
    it('Should remove the item {"Banana", 0.50, 1.00} from the List, remaining the object {"Apple", 0.30, 2.00}, returning true if the proccess is completed successfully', () => {
      targetList.remove(item1);
      expect(!targetList.checkAvailability(item1) && targetList.checkAvailability(item2)).toBeTruthy();
    });
  });


/*

  Test name: AddItemToSortedListOfImmutables
  Goal: Add items to a SortedListOfImmutables
  Test cases: [['Manzana', 0.75, 1.20], ['Uva', 1.20, 0.80], ['Pera', 0.60, 1.50]]
  Expected result: true for each case

 */


describe('AddItemToSortedListOfImmutables', () => {
  let testList: SortedListOfImmutables;
  let item: Listable;
  beforeEach(() => {
    testList = new SortedListOfImmutables(null);
  });
  const testCases = [
    ['Manzana', 0.75, 1.20],
    ['Uva', 1.20, 0.80],
    ['Pera', 0.60, 1.50]
  ];
  testCases.forEach(([name, wholesale, retail]) => {
    it(`Should add {"${name}", ${wholesale}, ${retail}} to the List`, () => {
      item = new Item(name.toString(), Number(wholesale), Number(retail));
      testList.add(item);
      expect(testList.checkAvailability(item)).toBeTruthy();
    });
  });
});




