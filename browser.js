
/* Set random color of a given HTML element */
function setRandomColor(elementName) {
  var elementList = document.querySelectorAll(elementName);
  for(const element of elementList) { 
    element.style.color = "#"+Math.floor(Math.random() * 255).toString(16) + Math.floor(Math.random() * 255).toString(16) + Math.floor(Math.random() * 255).toString(16);
  }
}

// Example
setRandomColor("p");  // Sets random color to all the paragraph elements
setRandomColor("h3"); // Sets random color to all the header(h3) elements
setRandomColor("li > a"); // Sets random color to all anchor(a) elements under list(li) elements
