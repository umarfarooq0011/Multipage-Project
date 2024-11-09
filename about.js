// Function to preload images and apply a fade-in effect
function preloadImages() {
  const images = document.querySelectorAll("img"); // Select all image elements

  images.forEach((img) => {
    const tempImg = new Image(); // Create a temporary image object to preload
    tempImg.src = img.src; // Set the source to the same as the actual image

    // Once the image is fully loaded
    tempImg.onload = () => {
      img.classList.add("fade-in"); // Add the fade-in class to the image
      img.style.opacity = "1"; // Make the image visible
    };
  });
}

// Load images when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", preloadImages);
