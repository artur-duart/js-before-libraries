// Nullish coalescing operator
const age = null;
console.log('Sua idade é: ' + (age ?? 'Não informado'));

// Objects
const user = {
	name: 'Artur',
	nickname: 'Moraes',
	age: 18,
	address: {
		street: 'Rua Três',
		number: 53,
	},
};

console.log('name' in user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(JSON.stringify(Object.values(user)));
console.log(JSON.stringify(Object.entries(user)));

// Destructuring
function showAge({ age }) {
	return age;
}

console.log(showAge(user));

const { address: endereco, age: idade, nickname = 'Duarte' } = user;
console.log(JSON.stringify({ endereco, idade, nickname }));

// Spread operator
const newUser = { ...user, city: 'São Paulo' };
console.log(newUser);

const { name, ...rest } = user;
console.log(JSON.stringify(rest));

// Rest operator
function myFunc(a, b, ...otherArgs) {
	console.log(a); // 1
	console.log(b); // 2
	console.log(otherArgs); // [3, 4, 5]
}

myFunc(1, 2, 3, 4, 5);
