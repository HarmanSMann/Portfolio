// about-me-slider.js

$(document).ready(function () {
    // Function to fetch images from a folder
    function fetchImages() {
      const folderPath = 'images/about-me-slider-imgs/'; // Update this with the path to your image folder
      const imageContainer = document.getElementById('imageSlider');
  
      // Use an AJAX request or any other method to fetch a list of image filenames from the server
      // Here, we'll use a simple array as a placeholder
      const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']; // Replace with actual filenames
  
      // Loop through the image filenames and create image elements
      imageFilenames.forEach((filename) => {
        const imgElement = document.createElement('div');
        imgElement.innerHTML = `<img src="${folderPath}/${filename}" alt="${filename}">`;
        imageContainer.appendChild(imgElement);
      });
    }
  
    // Fetch and display images
    fetchImages();
  
    // Initialize Slick Carousel
    $(".slick-slider").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });
  