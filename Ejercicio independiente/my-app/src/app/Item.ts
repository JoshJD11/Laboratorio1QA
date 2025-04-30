import { Listable } from "./listable";

export class Item implements Listable {
    constructor(
        private name: string,
        private wholesaleCost: number,
        private retailValue: number
    ) {}

    getName(): string {
        return this.name;
    }

    getWholesaleCost(): number {
        return this.wholesaleCost;
    }

    getRetailValue(): number {
        return this.retailValue;
    }

    equals(other: Listable): boolean {
        return other.getName() === this.name;
    }

    toString(): string {
        return `${this.name} (Wholesale: $${this.wholesaleCost}, Retail: $${this.retailValue})`;
    }
}
