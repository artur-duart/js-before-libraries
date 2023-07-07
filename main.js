// Nullish coalescing operator
const idade = null;
console.log('Sua idade é: ' + (idade ?? 'Não informado'));

// Objetos
const user = {
	name: 'Artur',
	age: 18,
	adress: {
		street: 'Rua Três',
		number: 53,
	},
};

console.log('name' in user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(JSON.stringify(Object.values(user)));
console.log(JSON.stringify(Object.entries(user)));
