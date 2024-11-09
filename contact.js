// Array of dynamic texts
const dynamicTexts = [
  "Get to Know Us Better",
  "We Are Here to Help",
  "Your Journey Begins with Us",
  "Contact Us for Future Projects",
];

let index = 0;
const dynamicTextElement = document.getElementById("dynamic-text");

// Function to change dynamic text
function changeDynamicText() {
  dynamicTextElement.textContent = dynamicTexts[index];
  index = (index + 1) % dynamicTexts.length; // Cycle through the array
}

// Call the function initially
changeDynamicText();

// Change text every 3 seconds
setInterval(changeDynamicText, 3000);

 
