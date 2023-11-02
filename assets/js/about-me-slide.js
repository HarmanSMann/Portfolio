// about-me-slider.js

$(document).ready(function () {
  // Function to fetch images from a folder
  function fetchImages() {
    const folderPath = "images/about-me-slider-imgs/"; // Update this with the path to your image folder
    const imageContainer = document.getElementById("imageSlider");

    // Hardcoded array of image filenames
    const imageFilenames = [
      "01.jpeg",
      "02.jpeg",
      "03.jpeg",
      "04.jpeg",
      "05.jpeg",
      "06.jpeg",
      "07.jpeg",
      "08.jpeg",
      "09.jpeg",
      "10.jpeg",
      "11.jpeg",
      "12.jpeg",
      "13.jpeg",
      "14.jpeg",
      "15.jpeg",
      "16.jpeg",
    ];

    // Loop through the image filenames and create image elements
    imageFilenames.forEach((filename) => {
      const imgElement = document.createElement('div');
      imgElement.innerHTML = `<img class="slider-image" src="${folderPath}${filename}" alt="${filename}">`;
      imageContainer.appendChild(imgElement);
    });
  }

  // Fetch and display images
  fetchImages();

  // Initialize Slick Carousel with multiple slidesToShow
  $(".slick-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show
    slidesToScroll: 1,
  });
});
