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
