// youtube-content.js
// Wait for the page to be fully loaded
$(document).ready(function () {
    // Set the YouTube video ID
    //<iframe width="1370" height="615" src="https://www.youtube.com/embed/4jTvXzllE8s" title="Video Resume - Take 2 (its complete, I think?)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    var videoId = '4jTvXzllE8s';

    // Construct the YouTube embed URL
    var embedUrl = 'https://www.youtube.com/embed/' + videoId;

    // Create the iframe element
    var iframe = $('<iframe width="100%" height="500" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>');

    // Append the iframe to the video-container after the specified delay
    setTimeout(function () {
        $('#video-container').html(iframe);
    }, );
});
