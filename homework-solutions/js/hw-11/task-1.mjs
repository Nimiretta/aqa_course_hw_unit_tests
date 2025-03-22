class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data type');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data type');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data type');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Incorrect data type');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    if (typeof title !== 'string' || typeof phone !== 'number' || typeof address !== 'string') {
      throw new Error('Incorrect data types');
    }
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Incorrect input');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}
const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
export { Employee, Company };
