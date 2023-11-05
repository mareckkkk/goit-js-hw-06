const form = document.querySelector(".login-form");

form.addEventListener("submit", submitFuncion);

function submitFuncion(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("please fill in all the fields!");
	}

	const user = {
		email: email.value,
		password: password.value,
	};

	console.log(user);
	event.currentTarget.reset();
}
