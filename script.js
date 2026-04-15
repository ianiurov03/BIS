function calculate() {
	let firstInput = document.getElementById("first");
	let secondInput = document.getElementById("second");
	let signInput = document.getElementById("sel");
	let outputDiv = document.getElementById("output");
	let first = parseFloat(firstInput.value);
	let second = parseFloat(secondInput.value);
	let sign = signInput.value;
	
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