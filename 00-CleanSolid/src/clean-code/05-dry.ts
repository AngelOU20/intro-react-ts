type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          const strValue = this[key] as string; // Hacer un type assertion a string
          if (strValue.length <= 0) throw new Error(`${key} is empty`);
          break;

        case 'number':
          if ((this[key] as number) <= 0) throw Error(`${key} is zero`);
          break;

        default:
          throw Error(`${typeof this[key]} is not supported`);
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue Large Pants', 20, 'L');
  const redPants = new Product('Red Small Pants', 10, 'S');

  console.log(bluePants.toString());
  console.log(redPants.toString());
})();
