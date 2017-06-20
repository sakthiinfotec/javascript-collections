"use strict";

/* Arrow function to generate a random color hex. code */
const randomColor = () => "#"+Math.floor(Math.random() * (255 * 255 * 255) + 1).toString(16);

/* Sets random color of a given HTML element */
function setRandomColor(elementName) {
  var elementList = document.querySelectorAll(elementName);
  for(const element of elementList) { 
    element.style.color = randomColor();
  }
}

// Example
setRandomColor("p");  // Sets random color to all the paragraph elements
setRandomColor("h3"); // Sets random color to all the header(h3) elements
setRandomColor("li > a"); // Sets random color to all anchor(a) elements under list(li) elements

/* Sets random background color of a given HTML element */
function setRandomBackgroundColor(elementName) {
  var elementList = document.querySelectorAll(elementName);
  for(const element of elementList) { 
    element.style.backgroundColor = randomColor();
  }
}
// Example
setRandomBackgroundColor("p");  // Sets random background color to all the paragraph elements

/* Sets random border color of a given HTML element */
function setRandomBorderColor(elementName) {
  document.querySelectorAll(elementName).forEach(function(element) {
    element.style.border = "4px dashed " + randomColor();
  });
}

// Example
setRandomBorderColor("p");  // Sets random border color to all the paragraph elements

/* Create an element with plain Javascript DOM API i.e without jQuery */
var elP = document.createElement("p");
var elPtxt = document.createTextNode("Web languages: HTML, CSS & JavaScript");
elP.appendChild(elPtxt);

var elDiv = document.querySelector("#wrapper-div");
document.body.insertBefore(elP, elDiv);
// or
document.body.appendChild(elP);

// pick() of underscore.js in ES6
function pick(object, ...keys) {
  let result = Object.create(null);
  keys.forEach((key) => { result[key] = object[key]; })
  return result;
}

// How bind() works?
function withdrawAccount(amt) {
	this.total-=amt;
	return this.name + "'s remaining balance is:" + this.total;
}

var sakthi = {name: "Sakthi",total: 1000};
var krishna = {name: "Krishna",total: 2000};

// bind() will be map `this` to a binding object
var withdrawSakthiAccount = withdrawAccount.bind(sakthi, 100);
var withdrawKrishnaAccount = withdrawAccount.bind(krishna, 250);

withdrawSakthiAccount();  // Sakthi's remaining balance is:900
withdrawKrishnaAccount(); // Krishna's remaining balance is:1750
withdrawSakthiAccount();  // Sakthi's remaining balance is:800
withdrawKrishnaAccount(); // Krishna's remaining balance is:1500

