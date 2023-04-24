// Get all the text elements on the page
const textElements = document.querySelectorAll('body *');

// Loop through each text element and set its color to red
for (let i = 0; i < textElements.length; i++) {
  textElements[i].style.color = 'red';
}
