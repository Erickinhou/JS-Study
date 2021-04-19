//there is some ways to create an object in react

//literal notation

const obj1 = {};
console.log(obj1);

//Object in JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object(); // new in a special keyword that calls an builder function

//create your own builder function
function Product(name, price, discount) {
  this.name = name;
  this.getPriceWithDiscount = () => {
    return price * (1 - discount);
  };
}

const p1 = new Product("pencil", 7.99, 0.15);
const p2 = new Product("laptop", 2.999, 0.2);

console.log(p1.name, p1.getPriceWithDiscount(), p2.price); //We don't have access to price

//factory function
function createWorker(name, baseSalary, miss) {
  return {
    name,
    baseSalary,
    getSalary() {
      return (baseSalary / 30) * (30 - miss);
    }
  };
}

const f1 = createWorker("John", 7000, 4);
const f2 = createWorker("Maria", 3750, 4);

console.log(f1.getSalary());
