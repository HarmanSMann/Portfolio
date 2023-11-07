// jquery.JobTitles.js
$(document).ready(function() {
    // Array of job titles
    var jobTitles = ["Software Developer", "Android Developer", "Web Developer", "Game Developer", "Gamer"];
    
    // Get the job title element
    var jobTitleElement = $("#jobTitle");
    
    // Set an interval to update the job title every 3 seconds (adjust as needed)
    var intervalTime = isMobile() ? 6000 : 4000; // If mobile, use longer interval

    setInterval(function() {
        // Get the current job title
        var currentTitle = jobTitleElement.text();
        
        // Find the index of the current title in the array
        var currentIndex = jobTitles.indexOf(currentTitle);
        
        // Calculate the next index, considering the end of the array
        var nextIndex = (currentIndex + 1) % jobTitles.length;
        
        // Get the next job title from the array
        var nextTitle = jobTitles[nextIndex];
        
        // Animate the crunching effect
        jobTitleElement.animate({ fontSize: "0px", opacity: 0 }, 500, function() {
            // Update the job title in the HTML
            jobTitleElement.text(nextTitle);
            
            // Reset font size and animate the expanding effect
            jobTitleElement.animate({ fontSize: isMobile() ? "40px" : "85px", opacity: 1 }, 500);
        });
    }, intervalTime);

    // Function to check if the device is a mobile
    function isMobile() {
        return window.innerWidth <= 600; // Adjust the width threshold as needed
    }
});
