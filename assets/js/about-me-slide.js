$(document).ready(function () {
  // Function to log screen size to console
  function logScreenSize() {
    console.log(`Screen size: ${$(window).width()} x ${$(window).height()}`);
  }

  // Log initial screen size
  logScreenSize();

  // Set interval to log screen size every 10 seconds
  setInterval(logScreenSize, 10000);

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
      const imgElement = document.createElement("div");
      imgElement.innerHTML = `<img class="slider-image" src="${folderPath}${filename}" alt="${filename}">`;
      imageContainer.appendChild(imgElement);
    });
  }

  // Function to get the number of slides to show based on screen width
  function getSlidesToShow() {
    if ($(window).width() > 768) {
      return 3; // Show 3 slides for wider screens
    } else if ($(window).width() > 480) {
      return 2; // Show 2 slides for medium-sized screens
    } else {
      return 1; // Show 1 slide for smaller screens
    }
  }

  // Function to initialize Slick Carousel with multiple slidesToShow
  function initSlickSlider() {
    $(".slick-slider").slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      slidesToShow: getSlidesToShow(),
      slidesToScroll: 1,
    });
  }

  // Fetch and display images
  fetchImages();
  // Initialize Slick Carousel
  initSlickSlider();

  // Update the number of slides on window resize
  $(window).on("resize", function () {
    const newSlidesToShow = getSlidesToShow();
    $(".slick-slider").slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
  });

  $(window).on("orientationchange", function () {
    const newSlidesToShow = getSlidesToShow();
    $(".slick-slider").slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
  });
});
