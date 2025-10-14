/*
working on new things 

Interfaces
What is an interface in TypeScript and how do you use it?
An interface in TypeScript is a way to define the shape of an object.
It specifies the structure an object must follow: properties, their types, and optional or readonly rules.
Interfaces don’t produce JavaScript code at runtime (they are only for type-checking during compilation).
interface User {
  id: number;
  name: string;
  email?: string;  // optional property
}

const user: User = {
  id: 1,
  name: "Alice"
};



How does an interface differ from a type alias?
Both interface and type can define object shapes, but there are key differences:

Aspect	Interface	Type Alias
Extensibility	Can be extended (via extends or declaration merging).	Cannot be re-opened once created (no merging).
Declaration merging	Supported (you can define the same interface name multiple times, and TS merges them).	Not supported.
Usages	Best for objects and class contracts.	Can represent objects, unions, intersections, primitives, tuples, etc.
Performance	Interfaces are generally preferred for complex object shapes (more optimized by TS).	More flexible but sometimes less performant in large projects.
// Interface
interface Person {
  name: string;
}
interface Person {
  age: number; // merged automatically
}
const p: Person = { name: "Bob", age: 30 };

// Type
type Animal = {
  species: string;
};
// ❌ cannot re-open "Animal"




Can an interface extend another interface? Give an example.
es. Interfaces can extend one or more interfaces using the extends keyword.
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
}

const emp: Employee = {
  name: "John",
  age: 25,
  employeeId: "E123"
};





Can a class implement multiple interfaces? How?
Yes. A class can implement multiple interfaces by separating them with commas.
interface Logger {
  log(message: string): void;
}

interface Serializer {
  serialize(): string;
}

class Service implements Logger, Serializer {
  log(message: string) {
    console.log("Log:", message);
  }

  serialize() {
    return JSON.stringify({ service: "running" });
  }
}



What happens if an object does not implement all properties of an interface?
TypeScript will throw a compile-time error.
An object must implement all required properties defined in the interface.
Optional properties (?) can be omitted.

interface User {
  id: number;
  name: string;
}

const u: User = {
  id: 1
};
// ❌ Error: Property 'name' is missing





Types
What is a type alias in TypeScript? Provide an example.
A type alias allows you to give a name to any type (primitive, object, union, intersection, tuple, etc.).
It doesn’t create a new type, just a reusable label for an existing type.

type UserId = number | string;   // alias for a union
type Point = { x: number; y: number }; // alias for object

const p: Point = { x: 10, y: 20 };
let id: UserId = "abc123";



How do type and interface differ in TypeScript?
| **Aspect**              | **Interface**                                           | **Type Alias**                                                       |
| ----------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| **Extensibility**       | Can be extended using `extends` or declaration merging. | Can use intersections (`&`) to extend, but no declaration merging.   |
| **Flexibility**         | Mainly for object shapes and class contracts.           | More flexible — can alias unions, intersections, primitives, tuples. |
| **Declaration Merging** | ✅ Supported (can re-open same name).                    | ❌ Not supported.                                                     |
| **Preferred Use**       | Large, extendable object hierarchies.                   | Complex unions, primitives, or when flexibility is needed.           |




When would you use a type alias instead of an interface?
Use a type alias when:
You need to represent union or intersection types.
You want to define tuples or primitives.
You need more flexibility than interfaces can provide.
type Response = "success" | "error" | "loading"; // cannot be done with interface




Can a type alias extend another type or interface?
Yes, but instead of extends, we use intersection (&).
type Person = { name: string };
type Employee = Person & { employeeId: number };

const emp: Employee = { name: "Alice", employeeId: 101 };

interface Logger { log(msg: string): void; }
type ExtendedLogger = Logger & { level: string };




What are union and intersection types in TypeScript? Give use cases.
Union (|): A type can be one of many options.
Use case: When a variable can hold multiple types of values.
type Input = string | number;
let data: Input;
data = "Hello";  // valid
data = 42;       // valid



Use case: When you need to combine multiple types into one.
type Person = { name: string };
type Employee = { id: number };
type Worker = Person & Employee;
const w: Worker = { name: "John", id: 123 };


Classes

How do you declare a class in TypeScript? Show syntax with a constructor and method.
class Person {
  name: string;

  constructor(name: string) { // Constructor
    this.name = name;
  }

  greet(): string { // Method
    return `Hello, ${this.name}`;
  }
}
const alice = new Person("Alice");
console.log(alice.greet()); // "Hello, Alice"
This defines a Person class with a property, a constructor, and a method.




How do access modifiers (public, private, protected) work in TypeScript classes?
public (default): Accessible anywhere.

private: Only accessible inside the class.

protected: Accessible in the class and derived subclasses.
class Example {
  public x: number;
  private y: number;
  protected z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}





What are abstract classes in TypeScript? How are they different from interfaces?
Abstract class: Cannot be instantiated directly; may implement some methods. Subclasses must implement abstract methods.

Interface: Specifies contracts; cannot contain implementation. Classes implement interfaces and define all details.
abstract class Animal {
  abstract makeSound(): void;
  move(): void { console.log("Moving"); }
}

interface IAnimal {
  makeSound(): void;
}









How does TypeScript support inheritance?
Use the extends keyword for inheritance.
class Animal {
  move() { console.log("Animal moved"); }
}
class Dog extends Animal {
  bark() { console.log("Woof!"); }
}
const d = new Dog();
d.move(); // "Animal moved"
d.bark(); // "Woof!"








What is a readonly property in a class and how do you declare it?
A readonly property can be set only at declaration or in the constructor and cannot be changed later.
class Circle {
  readonly pi: number = 3.14;
  constructor(public radius: number) {}
}
const c = new Circle(2);
// c.pi = 3.1415; // Error: Cannot assign to 'pi' because it is a read-only property.


What are static members in TypeScript classes?
Static members belong to the class itself, not instances, and are accessed using the class name.
class MathUtils {
  static pi: number = 3.1416;
  static area(r: number): number {
    return MathUtils.pi * r * r;
  }
}
console.log(MathUtils.area(2)); // 12.5664






How can you use getter and setter (accessor) functions in classes?
Use get and set accessors to control property access logic.
class Employee {
  private _salary: number = 0;

  get salary(): number {
    return this._salary;
  }

  set salary(amount: number) {
    if (amount < 0) throw new Error("Invalid salary");
    this._salary = amount;
  }
}
const e = new Employee();
e.salary = 50000;
console.log(e.salary); // 50000
*/ 