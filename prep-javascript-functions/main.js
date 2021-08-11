function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hrsToMin = convertHoursToMinutes(2);
console.log('hrsToMin', hrsToMin);

function getGreeting(name) {
  return `Hello ${name}!`;
}

var greeting = getGreeting('World');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumProduct5 = addAndMultiplyBy5(10, 5);
console.log('sumProduct5', sumProduct5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var productQuot5 = multiplyAndDivideBy5(35, 10);
console.log('productQuot5', productQuot5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullname = getFullName('Juan', 'Ramirez');
console.log('fullname', fullname);

function cube(number) {
  return Math.pow(number, 3);
}

var thirdPower = cube(5);
console.log('thirdPower', thirdPower);
