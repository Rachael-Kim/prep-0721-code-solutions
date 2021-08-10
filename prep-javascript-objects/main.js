const person = {
  firstName: 'Rachael',
  lastName: 'Kim',
  hobby: 'eating'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is: ${fullName}.`);

person.job = 'self-employed';
console.log(`The person's current job is: ${person.job}`);

person.previousJob = 'banker';
console.log(`The person's previous job is: ${person.previousJob}`);
