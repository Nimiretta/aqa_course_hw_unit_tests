// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
  getDetails(): string;
  start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
  constructor(
    protected make: string,
    protected model: string,
  ) {}

  public abstract getDetails(): string;

  public start() {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    protected year: number,
  ) {
    super(make, model);
  }

  public getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

// 4. Создайте объект класса Car и проверьте работоспособность

const toyota = new Car('Toyota', 'Auris', 2007);
console.log(toyota.getDetails());
console.log(toyota.start());
