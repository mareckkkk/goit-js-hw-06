const colorInput = document.querySelector("#validation-input");

colorInput.addEventListener("blur", () => {
	if (colorInput.value.length == colorInput.getAttribute("data-length")) {
		colorInput.classList.remove("invalid");
		colorInput.classList.add("valid");
	} else {
		colorInput.classList.remove("valid");
		colorInput.classList.add("invalid");
	}
});
