const sumTwoNumbers = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	});
};

sumTwoNumbers(2, 3).then((sum) => console.log(sum)).catch((err) => console.log(err));
