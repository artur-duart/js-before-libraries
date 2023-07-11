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
console.log(
	JSON.stringify({
		endereco,
		idade,
		nickname,
	})
);

// Spread operator
const newUser = {
	...user,
	city: 'São Paulo',
};
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

// Short Syntax
const name2 = 'Artur';
const age2 = 18;

// const user2 = {
// 	name2: name2,
// 	age2: age2,
// };

const user2 = {
	name2,
	age2,
};

console.log(JSON.stringify(user2));

// Optional Chaining
const user3 = {
	name: 'Artur',
	nickname: 'Moraes',
	age: 18,
	address: {
		street: 'Rua Três',
		number: 53,
		zip: {
			code: '06000000',
			city: 'Osasco',
		},
		showFullAddress() {
			return 'Full Address!';
		},
	},
};

if (user3.address) {
	if (user3.address.zip) {
		console.log(user3.address.zip.code);
	} else {
		console.log('Não informado');
	}
} else {
	console.log('Não informado');
}

console.log(user3.address?.zip?.code ?? 'Não informado');
console.log(user3.address?.showFullAddress?.());

// Map
// const newArray = array.map(i => {
// 	return i % 2 === 0 ? i * 10 : i;
// });

// Filter
// const newArray = array.filter((i) => i % 2 === 0).map((i) => i * 10);
// console.log(newArray);

// Every
const array = [1, 2, 3, 4, 5];
console.log(array.every(i => typeof i === 'number'));
