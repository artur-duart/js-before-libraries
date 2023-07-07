// Nullish coalescing operator
const age = null;
console.log('Sua idade é: ' + (age ?? 'Não informado'));

// Objetos
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

// Desestruturação
function showAge({ age }) {
	return age;
}

console.log(showAge(user));

const { address: endereco, age: idade, nickname = 'Duarte' } = user;
console.log(JSON.stringify({ endereco, idade, nickname }));
