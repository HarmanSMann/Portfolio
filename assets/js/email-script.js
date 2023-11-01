document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Your existing logic to submit the form

    // Handle the success or error response from the server
    fetch("http://127.0.0.1:3000/send-email", {
      method: "POST",
      body: new FormData(document.getElementById("contactForm")),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Response from server:", data);
        if (data === "Email sent successfully") {
          // Redirect to the success page
          window.location.href = "/success-page";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error as needed
      });
  });
