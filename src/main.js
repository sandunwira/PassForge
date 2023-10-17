// const { appWindow } = window.__TAURI__.window;

// Get the input and button elements
const generateBtn = document.getElementById("generateBtn");
const generatedPW = document.getElementById("generatedPW");
const copyBtn = document.getElementById("copyBtn");

const strength1 = document.getElementById("strength1");
const strength2 = document.getElementById("strength2");
const strength3 = document.getElementById("strength3");

const symbolsNo = document.getElementById("symbolsNo");
const symbolsYes = document.getElementById("symbolsYes");

const length5 = document.getElementById("length5");
const length10 = document.getElementById("length10");
const length15 = document.getElementById("length15");

let strengthValue = 2;
let symbolsValue = true;
let lengthValue = 10;

strength1.addEventListener("click", function () {
	strength1.classList.add("selected");
	strength2.classList.remove("selected");
	strengthValue = 1;
});
strength2.addEventListener("click", function () {
	strength1.classList.remove("selected");
	strength2.classList.add("selected");
	strengthValue = 2;
});

symbolsNo.addEventListener("click", function () {
	symbolsNo.classList.add("selected");
	symbolsYes.classList.remove("selected");
	symbolsValue = false;
});
symbolsYes.addEventListener("click", function () {
	symbolsNo.classList.remove("selected");
	symbolsYes.classList.add("selected");
	symbolsValue = true;
});

length5.addEventListener("click", function () {
	length5.classList.add("selected");
	length10.classList.remove("selected");
	length15.classList.remove("selected");
	lengthValue = 5;
});
length10.addEventListener("click", function () {
	length5.classList.remove("selected");
	length10.classList.add("selected");
	length15.classList.remove("selected");
	lengthValue = 10;
});
length15.addEventListener("click", function () {
	length5.classList.remove("selected");
	length10.classList.remove("selected");
	length15.classList.add("selected");
	lengthValue = 15;
});



// generate the password with options to generatedPW.innerText
function generatePassword() {
	let password = "";
	let numbers = "0123456789";
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

	if (strengthValue === 1) {
		characters = numbers;
	} else if (strengthValue === 2) {
		characters += characters + numbers;
	}

	if (symbolsValue === true) {
		characters += characters + numbers + symbols;
	} else if (symbolsValue === false) {
		characters += characters + numbers;
	}

	for (let i = 0; i < lengthValue; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	generatedPW.innerText = password;
}
generateBtn.addEventListener("click", generatePassword);


// Add a click event listener to the button
function copyPassword() {
	navigator.clipboard
		.writeText(generatedPW.innerText)
		.then(() => {
			console.log("Text copied to clipboard");
		})
		.catch((err) => {
			console.error("Error copying text: ", err);
		});
}
copyBtn.addEventListener("click", copyPassword);