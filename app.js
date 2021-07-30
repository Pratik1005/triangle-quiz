const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const output1 = document.querySelector('#output-1');
// const output2 = document.querySelector('#output-2');
// const output3 = document.querySelector('#output-3');
// const output4 = document.querySelector('#output-4');
// Q1
const firstAngle = document.querySelector('#first-angle');
const secondAngle = document.querySelector('#second-angle');
const thirdAngle = document.querySelector('#third-angle');
// Q2
const obtuseYes = document.querySelector('#obtuse-yes');
// const obtuseNo = document.querySelector('#obtuse-no');
// const acuteYes = document.querySelector('#acute-yes');
const acuteNo = document.querySelector('#acute-no');
const rightYes = document.querySelector('#right-yes');
// const rightNo = document.querySelector('#right-no');
// const thirdAngle1 = document.querySelector('#third-angle-1');
// const thirdAngle2 = document.querySelector('#third-angle-2');
const thirdAngle3 = document.querySelector('#third-angle-3');
// const isos1 = document.querySelector('#isos-1');
// const isos2 = document.querySelector('#isos-2');
const isos3 = document.querySelector('#isos-3');
// const equi1 = document.querySelector('#equi-1');
const equi2 = document.querySelector('#equi-2');
// const equi3 = document.querySelector('#equi-3');

// Q3
const hypo1 = document.querySelector('#hypo-1');
const hypo2 = document.querySelector('#hypo-2');
// Q4
const base = document.querySelector('#area-base');
const height = document.querySelector('#area-height');

function removeItems() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
	tabItems.forEach(item => {
		item.classList.remove('tab-item-background');
	});
}

function selectItem(e) {
	removeItems();
	document.querySelector(`#${this.id}-content`).classList.add('show');
	document.querySelector(`#${this.id}`).classList.add('tab-item-background');
}

function isTriangle(e) {
	e.preventDefault();
	const angle1 = parseInt(firstAngle.value, 10);
	const angle2 = parseInt(secondAngle.value, 10);
	const angle3 = parseInt(thirdAngle.value, 10);

	if (angle1 + angle2 + angle3 === 180) {
		output1.textContent = "The given angles will make a Triangle";
	} else {
		output1.textContent = "The given angles will not make a Triangle";
	}
}

function typeOfTriangle(e) {
	e.preventDefault();
	// 1. obtuse
	let score = 0;
	if (obtuseYes.checked){
		score++;
	}else {
		document.querySelector('#obtuse-ans').textContent = "Correct ans: Yes";
	}
	// 2. acute
	if (acuteNo.checked) {
		score++;
	} else {
		document.querySelector('#acute-ans').textContent = "Correct ans: No";
	}
	// 3. right
	if (rightYes.checked) {
		score++;
	} else {
		document.querySelector('#right-ans').textContent = "Correct ans: Yes";
	}
	// 4. third angle
	if (thirdAngle3.checked) {
		score++;
	} else {
		document.querySelector('#third-ans').textContent = "Correct ans: 75";
	}
	// 5. isos
	if (isos3.checked) {
		score++;
	} else {
		document.querySelector('#isos-ans').textContent = "Correct ans: 80"
	}
	// Equi
	if (equi2.checked) {
		score++;
	} else {
		document.querySelector('#equi-ans').textContent = "Correct ans: 60";
	}
	// score
	document.querySelector('#score').textContent = `Your Score: ${score} / 6`;
}

function getHypotenuse(e) {
	e.preventDefault();
	if (!hypo1.value && !hypo2.value) {
		document.querySelector('#hypo-ans').textContent = `Enter valid inputs`;
	} else {
	const a = parseInt(hypo1.value, 10);
	const b = parseInt(hypo2.value, 10);
	const c = Math.hypot(a, b).toFixed(2);
	document.querySelector('#hypo-ans').textContent = `The Hypotenuse for given value is ${c}`;
	}
}

function getArea(e) {
	e.preventDefault();
	if (!base.value && !height.value) {
		document.querySelector('#area-ans').textContent = `Enter valid inputs`;
	} else {
	const b = parseInt(base.value, 10);
	const h = parseInt(height.value, 10);
	const areaOfTriangle = ((b * h) / 2).toFixed(2);
	document.querySelector('#area-ans').textContent = `The Area of triangle for given values is ${areaOfTriangle}`;
	}
}

tabItems.forEach(item => 
	item.addEventListener('click', selectItem)
);

btn1.addEventListener('click', isTriangle);

btn2.addEventListener('click', typeOfTriangle);

btn3.addEventListener('click', getHypotenuse);

btn4.addEventListener('click', getArea);