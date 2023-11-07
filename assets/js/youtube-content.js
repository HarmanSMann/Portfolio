// youtube-content.js
// Wait for the page to be fully loaded
$(document).ready(function () {
    // Set the YouTube video ID
    var videoId = '4jTvXzllE8s';

    // Construct the YouTube embed URL
    var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=0';

    // Create the iframe element
    var iframe = $('<iframe width="100%" height="500" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>');

    // Append the iframe to the video-container after the specified delay
    setTimeout(function () {
        $('#video-container').html(iframe);
    }, );
});
