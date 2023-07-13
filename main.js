async function searchGithubData() {
	try {
		const response = await fetch(
			'<https://api.github.com/users/artur-duart>'
		);
		const body = await response.json();

		console.log(body);
	} catch (err) {
		console.log(err);
	} finally {
		console.log('done');
	}
}
searchGithubData();
