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

// RegExp to get Chrome Version
// navigator.userAgent -> "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"
var chromeVersion = /Chrome\/([0-9.]+)/g.exec(navigator.userAgent)[1];

var re = /Chrome\/(.+)\ /g;
var chromeVersion = navigator.userAgent.match(re)[0].trim().split('/')[1]

// Forereload of CSS files
// Ref: https://stackoverflow.com/questions/45343401/how-to-reload-single-file-in-chrome-developer-tools/45359474#45359474
function reloadCSS() {
  const links = document.getElementsByTagName('link');
  Array.from(links)
    .filter(link => link.rel.toLowerCase() === 'stylesheet' && link.href)
    .forEach(link => {
      const url = new URL(link.href, location.href);
      url.searchParams.set('forceReload', Date.now());
      link.href = url.href;
    });
}
