const textHolder = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textHolder.addEventListener("input", (e) => {
	output.textContent = e.target.value;

	if (e.target.value == "") {
		output.textContent = "Anonymous";
	}
});


