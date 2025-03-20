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
    if (!value || !this.#validateName(value)) {
      throw new Error('Incorrect firstName format');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!value || !this.#validateName(value)) {
      throw new Error('Incorrect lastName format');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!value || !this.#validateProfession(value)) {
      throw new Error('Incorrect profession format');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number' || value <= 0 || value >= 10_000) {
      throw new Error('Incorrect salary format');
    }
    this.#salary = value;
  }

  #validateName(value) {
    const regex = /^[A-Za-z]{2,50}$/;
    return regex.test(value);
  }

  #validateProfession(value) {
    const regex = /^[A-Za-a]+(?:[A-Za-z ]+)*$/;
    return regex.test(value);
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

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((employee) => employee.firstName === firstName);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    const index = this.#employees.findIndex((employee) => employee.firstName === firstName);
    if (index === -1) {
      throw new Error('Employee not found');
    }
    return index;
  }

  removeEmployee(firstName) {
    const indexToRemove = this.#getEmployeeIndex(firstName);
    this.#employees.splice(indexToRemove, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((acc, employee) => acc + employee.salary, 0);
  }
}

export { Employee, Company };
