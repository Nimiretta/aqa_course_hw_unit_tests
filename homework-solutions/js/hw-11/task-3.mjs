class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  profession = 'Developer';

  constructor(firstName, lastName, salary, languages = []) {
    super(firstName, lastName, salary);
    if (!languages.every((lang) => this.#validateLanguage(lang))) {
      throw new Error('Incorrect languages param');
    }
    this.programmingLanguages = languages;
  }

  addProgrammingLanguage(language) {
    if (!this.#validateLanguage(language)) {
      throw new Error('Incorrect language input');
    }
    this.programmingLanguages.push(language);
  }

  #validateLanguage(lang) {
    return lang && typeof lang === 'string';
  }
}

class Manager extends Employee {
  profession = 'Manager';

  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    if (typeof teamSize !== 'number') {
      throw new Error('Incorrect teamSize input');
    }
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  profession = 'Designer';

  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    if (!designTools.every((tool) => this.#validateTool(tool))) {
      throw new Error('Incorrect designTools param');
    }
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (!this.#validateTool(tool)) {
      throw new Error('Incorrect tool input');
    }
    this.designTools.push(tool);
  }

  #validateTool(tool) {
    return tool && typeof tool === 'string';
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
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
      if (!this.#validateUniqueName(employee)) {
        throw new Error('Full name should be unique');
      }
      this.#employees.push(employee);
    } else {
      throw new Error('Incorrect input');
    }
  }

  #validateUniqueName(employee) {
    const fullName = employee.getFullName();
    return !this.#employees.some((employee) => employee.getFullName() === fullName);
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

  getEmployeesByProfession(profession) {
    if (!profession || typeof profession !== 'string') {
      throw new Error('Incorrect profession input');
    }
    return this.#employees.filter((employee) => employee.profession === profession);
  }
}
/* Тесты
const dev1 = new Developer('Alice', 'Smith', 80000, ['JavaScript']);
const dev2 = new Developer('Bob', 'Brown', 90000, ['Python']);

const manager = new Manager('Charlie', 'White', 100000, 5);
const manager2 = new Manager('Diana', 'Black', 110000, 6);

const designer = new Designer('Eve', 'Green', 70000, ['Figma']);
const designer2 = new Designer('Frank', 'Grey', 75000, ['Photoshop']);

const company = new Company('Company', '1234567890', '123 Main St');
company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(manager);
company.addEmployee(manager2);
company.addEmployee(designer);
company.addEmployee(designer2);

console.log(company.getEmployeesByProfession('Developer'));
console.log(company.getEmployeesByProfession('Man'));

const dev3 = new Developer('Alice', 'Smith', 60000, ['C#']);
company.addEmployee(dev3); */

export { Employee, Company, Designer, Developer, Manager };
