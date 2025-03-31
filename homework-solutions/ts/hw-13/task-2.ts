// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const isLongEnough = password.length >= 8;
  const isNotEmpty = password.trim() !== '';

  return hasUpperCase && hasLowerCase && hasDigit && isLongEnough && isNotEmpty;
}

// Tests

console.log(validatePassword('Password123')); // true
console.log(validatePassword('Pass word 123')); // true
console.log(validatePassword('password123')); // false (no uppercase letter)
console.log(validatePassword('PASSWORD123')); // false (no lowercase letter)
console.log(validatePassword('Password')); // false (no digit)
console.log(validatePassword('Pass123')); // false (too short)
console.log(validatePassword('12345678')); // false (no letters)
console.log(validatePassword('   ')); // false (only spaces)
