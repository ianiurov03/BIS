function validate(number) {
    const pattern = /[0-9]/;
    if (!pattern.test(number)) {
        alert("В полях ввода должны быть числа.");
        throw new Error("В полях ввода должны быть числа.");
    }
}

function calculate() {
	let firstInput = document.getElementById("first");
	let secondInput = document.getElementById("second");
	let signInput = document.getElementById("sel");
	let outputDiv = document.getElementById("output");
    'use strict';
	let first = parseFloat(firstInput.value);
    'use strict';
	let second = parseFloat(secondInput.value);
	let sign = signInput.value;
	validate(first);
	validate(second);
	
	if (isNaN(first)) {
		outputDiv.innerHTML = "Не введено первое число";
		outputDiv.style.backgroundColor = "#eecccc";
		firstInput.focus();
		return;
	}
	
	if (isNaN(second)) {
		outputDiv.innerHTML = "Не введено второе число";
		outputDiv.style.backgroundColor = "#eecccc";
		secondInput.focus();
		return;
	}
	
	if (second == 0 && sign == "division") {
		outputDiv.innerHTML = "Делить на ноль нельзя";
		outputDiv.style.backgroundColor = "#eecccc";
		secondInput.focus();
		return;
	}
	
	if (sign == "plus") {
		var x = first + second;
		outputDiv.innerHTML = "Результат: " + x;
		outputDiv.style.backgroundColor = "#cceecc";
		return;
	}
	
	if (sign == "minus") {
		var x = first - second;
		outputDiv.innerHTML = "Результат: " + x;
		outputDiv.style.backgroundColor = "#cceecc";
		return;
	}
	
	if (sign == "times") {
		var x = first * second;
		outputDiv.innerHTML = "Результат: " + x;
		outputDiv.style.backgroundColor = "#cceecc";
		return;
	}
	
	if (sign == "division") {
		var x = first / second;
		outputDiv.innerHTML = "Результат: " + x;
		outputDiv.style.backgroundColor = "#cceecc";
		return;
	}
}
